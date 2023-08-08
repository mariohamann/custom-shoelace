import { TextPrompt, isCancel } from '@clack/core';
import { intro, outro, text, select } from '@clack/prompts';
import download from 'download-git-repo';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { execSync } from 'child_process';

const CONFIG_FILE = 'custom-shoelace.config.json';
const repo = 'shoelace-style/shoelace';
const dest = 'temp/repo';
const finalDest = './packages/components';

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

function isProtected(filePath, protectedGlobs, rootDirectory) {
  return glob.sync(protectedGlobs.join('|'), { cwd: rootDirectory }).includes(path.relative(rootDirectory, filePath));
}

function copyDirectory(source, target, protectedGlobs) {
  fs.readdirSync(source).forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    if (!isProtected(sourcePath, protectedGlobs, target)) {
      if (fs.statSync(sourcePath).isDirectory()) {
        fs.mkdirSync(targetPath, { recursive: true });
        copyDirectory(sourcePath, targetPath, protectedGlobs);
      } else if (!fs.existsSync(targetPath)) {
        fs.copyFileSync(sourcePath, targetPath);
      }
    }
  });
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

function updateLibraryFileWithComponents(libraryName, libraryPrefix, components) {
  function properCase(tag) {
    return tag.split('-').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join('');
  }

  function tagWithoutPrefix(tag) {
    return tag.slice(libraryPrefix.length + 1);
  }

  const filePath = `${finalDest}/src/${libraryName}.ts`;
  const content = fs.readFileSync(filePath, 'utf8');
  const newComponents = components.map(component => {
    return `export { default as ${properCase(component)} } from './components/${tagWithoutPrefix(component)}/${tagWithoutPrefix(component)}.js';`;
  }).join('\n');

  fs.writeFileSync(filePath, content.replace('/* plop:component */', `${newComponents}\n/* plop:component */`), 'utf8');
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

async function main() {
  const libraryName = await getConfigParam('libraryName', "What's the name of your library? (only lowercase letters)", 'shoelace', /^[a-z]+$/, 'Only lowercase letters are allowed');
  const libraryPrefix = await getConfigParam('libraryPrefix', "What's the prefix of your components? (only lowercase letters)", 'sl', /^[a-z]+$/, 'Only lowercase letters are allowed');
  const version = await select({
    message: 'Which version do you want to install?',
    options: [
      'next', 'v2.6.0', 'v2.5.2', 'v2.5.1', 'v2.5.0', 'v2.4.0', 'v2.3.0', 'v2.2.0', 'v2.1.0', 'v2.0.0'
    ].map(value => ({ value })),
  });

  // Cleanup before downloading
  deleteFolderRecursive(dest);
  fs.mkdirSync(dest, { recursive: true });

  await download(`${repo}#${version}`, dest, err => {
    if (err) throw new Error(`Error downloading repo: ${err}`);

    execSync(`git clean ${finalDest} -X -f`);
    processDirectory(dest, libraryName, libraryPrefix);
    copyDirectory(dest, finalDest, readConfig().protected || []);
    updateLibraryFileWithComponents(libraryName, libraryPrefix, readConfig().additionalComponents || []);

    outro(`You're all set!`);

    deleteFolderRecursive(dest);
    fs.mkdirSync(dest, { recursive: true });
  });
}

main().catch(err => console.error(err));
