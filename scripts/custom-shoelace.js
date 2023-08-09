import { intro, outro, text, select, confirm, spinner, isCancel, cancel } from '@clack/prompts';
import download from 'download-git-repo';
import fs from 'fs';
import path from 'path';
import {
  createSymlinks, removeSymlinks,
} from '@mariohamann/symlink-files';

const CONFIG_FILE = 'custom-shoelace.config.json';
const repo = 'shoelace-style/shoelace';

intro('🥾 Custom Shoelace CLI');

function readConfig() {
  return fs.existsSync(CONFIG_FILE) ? JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8')) : {};
}

function saveConfig(config) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

async function getConfigParam(paramName, message, placeholder, pattern, errorMessage) {
  let paramValue = readConfig()[paramName];
  if (!paramValue) {
    paramValue = await text({
      message,
      placeholder,
      validate(value) {
        if (value && !pattern.test(value)) return errorMessage;
      },
    });
    const config = readConfig();
    config[paramName] = paramValue;
    saveConfig(config);
  }
  return paramValue;
}

function replaceContent(content, libraryName, libraryPrefix) {
  const capitalizedPrefix = `${libraryPrefix.charAt(0).toUpperCase()}${libraryPrefix.slice(1)}`;
  const capitalizedLibraryName = `${libraryName.charAt(0).toUpperCase()}${libraryName.slice(1)}`;
  const lowerLibraryName = libraryName.toLowerCase();
  const libraryDesignName = `${lowerLibraryName}-design-system`;

  content = content
    .replace(/Sl(?=[A-Z])/g, capitalizedPrefix)
    .replace(/(?<![A-Za-z])sl-/g, `${libraryPrefix}-`)
    .replace(/shoelace-style/g, libraryDesignName)
    .replace(/Shoelace/g, capitalizedLibraryName)
    .replace(/shoelace/g, lowerLibraryName);

  const regexPattern = new RegExp(`@${libraryDesignName}/(?!${lowerLibraryName}$)`, 'g');
  return content.replace(regexPattern, '@shoelace-style/');
}

function processDirectory(directory, libraryName, libraryPrefix) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath, libraryName, libraryPrefix);
      fs.renameSync(fullPath, replaceContent(fullPath, libraryName, libraryPrefix));
    } else {
      fs.writeFileSync(fullPath, replaceContent(fs.readFileSync(fullPath, 'utf-8'), libraryName, libraryPrefix));
      fs.renameSync(fullPath, replaceContent(fullPath, libraryName, libraryPrefix));
    }
  });
}

function deleteFolderRecursive(directory) {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach(file => {
      const curPath = path.join(directory, file);
      fs.lstatSync(curPath).isDirectory() ? deleteFolderRecursive(curPath) : fs.unlinkSync(curPath);
    });
    fs.rmdirSync(directory);
  }
}

async function symlinkFiles() {
  const config = readConfig();

  const symlinksConfig = [
    {
      source: path.resolve(config.vendorPath),
      globs: config.includeGlobs,
      target: path.resolve(config.targetPath)
    }
  ];

  // await removeSymlinks(symlinksConfig);
  await createSymlinks(symlinksConfig);
}

async function main() {
  const command = await select({
    message: 'What do you want to do?',
    options: [
      { value: 'symlink', label: 'Update symlinks' },
      { value: 'download', label: 'Download Shoelace', hint: 'This will automatically update symlinks, too.' },
    ],
  });

  if (isCancel(command)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  const s = spinner();
  const libraryName = await getConfigParam('libraryName', "What's the name of your library? (only lowercase letters)", 'shoelace', /^[a-z]+$/, 'Only lowercase letters are allowed');
  const libraryPrefix = await getConfigParam('libraryPrefix', "What's the prefix of your components? (only lowercase letters)", 'sl', /^[a-z]+$/, 'Only lowercase letters are allowed');

  if (command === 'download') {
    const version = await select({
      message: 'Which version do you want to install?',
      options: [
        'next', 'v2.6.0', 'v2.5.2', 'v2.5.1', 'v2.5.0', 'v2.4.0', 'v2.3.0', 'v2.2.0', 'v2.1.0', 'v2.0.0'
      ].map(value => ({ value })),
    });

    if (isCancel(version)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    const shouldContinue = await confirm({
      message: `Do you want to continue? This will delete everything in ${readConfig().vendorPath}.`,
    });

    if (isCancel(shouldContinue) || !shouldContinue) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    // Cleanup target directory before downloading
    deleteFolderRecursive(readConfig().vendorPath);
    fs.mkdirSync(readConfig().vendorPath, { recursive: true });


    s.start(`⏳ Downloading Shoelace ${version}`);
    await new Promise((resolve, reject) => {
      download(`${repo}#${version}`, readConfig().vendorPath, err => {
        if (err) reject(`Error downloading repo: ${err}`);
        else resolve();
      });
    });
    s.stop(`✅ Download completed`);

    s.start(`⏳ Preparing files`);
    processDirectory(readConfig().vendorPath, libraryName, libraryPrefix);
    s.stop(`✅ Files prepared`);
  }

  s.start(`⏳ Creating symlinks`);
  await symlinkFiles();
  s.stop(`✅ Symlinks created`);

  outro(`🎉 ${libraryName} is now set.`);
}

main();
