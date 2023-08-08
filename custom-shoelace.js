import { TextPrompt, isCancel } from '@clack/core';
import { intro, outro, text, select } from '@clack/prompts';
import download from 'download-git-repo';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';  // Make sure to install "glob" module

const CONFIG_FILE = 'custom-shoelace.config.json';
const repo = 'shoelace-style/shoelace';
const dest = 'temp/repo';
const finalDest = './packages/components';

intro(`🥾 Custom Shoelace CLI`);

// Function to read the config file
function readConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  }
  return {};
}

// Function to save the config file
function saveConfig(config) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

const config = readConfig();
let { libraryName, libraryPrefix } = config;

if (!libraryName) {
  libraryName = await text({
    message: "What's the name of your library? (only lowercase letters)",
    placeholder: 'shoelace',
    validate(value) {
      // check if there any non-letter characters
      if (value && !/^[a-z]+$/.test(value)) {
        return 'Only lowercase letters are allowed';
      }
    },
  });

  config.libraryName = libraryName;  // save to config
}

if (!libraryPrefix) {
  libraryPrefix = await text({
    message: "What's the prefix of your components? (only lowercase letters)",
    placeholder: 'sl',
    validate(value) {
      // check if there any non-letter characters
      if (value && !/^[a-z]+$/.test(value)) {
        return 'Only uppercase letters are allowed';
      }
    },
  });

  config.libraryPrefix = libraryPrefix;  // save to config
}

// Save updated config if needed
saveConfig(config);

const version = await select({
  message: 'Which version do you want to install?',
  options: [
    { value: 'next' },
    { value: 'v2.6.0' },
    { value: 'v2.5.2' },
    { value: 'v2.5.1' },
    { value: 'v2.5.0' },
    { value: 'v2.4.0' },
    { value: 'v2.3.0' },
    { value: 'v2.2.0' },
    { value: 'v2.1.0' },
    { value: 'v2.0.0' },
  ],
});

function deleteUnprotectedFiles(directory, protectedGlobs, rootDirectory) {
  const allFilesAndFolders = fs.readdirSync(directory);

  for (const item of allFilesAndFolders) {
    const fullPath = path.join(directory, item);
    const relativePath = path.relative(rootDirectory, fullPath);

    if (fs.statSync(fullPath).isDirectory()) {
      deleteUnprotectedFiles(fullPath, protectedGlobs, rootDirectory);  // Recursive call for directories
    } else {
      let shouldDelete = true;
      for (const pattern of protectedGlobs) {
        if (glob.sync(pattern, { cwd: rootDirectory }).includes(relativePath)) {
          shouldDelete = false;
          break;
        }
      }

      if (shouldDelete) {
        fs.unlinkSync(fullPath);
      }
    }
  }
}


function deleteEmptyDirectories(directory, rootDirectory) {
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      deleteEmptyDirectories(fullPath, rootDirectory);
    }
  }

  // Check after going through subdirectories
  if (fs.readdirSync(directory).length === 0 && directory !== rootDirectory) {
    fs.rmdirSync(directory);
  }
}


function isProtected(filePath, protectedGlobs, rootDirectory) {
  const relativePath = path.relative(rootDirectory, filePath);
  for (const pattern of protectedGlobs) {
    if (glob.sync(pattern, { cwd: rootDirectory }).includes(relativePath)) {
      return true;
    }
  }
  return false;
}

function copyDirectory(source, target, protectedGlobs, rootDirectory = target) {
  fs.readdirSync(source).forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    if (fs.statSync(sourcePath).isDirectory()) {
      if (!isProtected(sourcePath, protectedGlobs, rootDirectory)) {
        fs.mkdirSync(targetPath, { recursive: true });
        copyDirectory(sourcePath, targetPath, protectedGlobs, rootDirectory);  // Recursive call for subdirectories
      }
    } else if (!fs.existsSync(targetPath) && !isProtected(targetPath, protectedGlobs, rootDirectory)) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}


function replaceContent(content) {
  const transformedLibraryPrefix = String(libraryPrefix).charAt(0).toUpperCase() + String(libraryPrefix).slice(1);
  const transformedLibraryName = String(libraryName).charAt(0).toUpperCase() + String(libraryName).slice(1);
  const lowerLibraryName = String(libraryName).toLowerCase();

  content = content
    .replace(/Sl(?=[A-Z])/g, transformedLibraryPrefix)
    .replace(/(?<![A-Za-z])sl-/g, `${String(libraryPrefix)}-`)
    .replace(/shoelace-style/g, `${String(libraryName)}-design-system`)
    .replace(/Shoelace/g, transformedLibraryName)
    .replace(/shoelace/g, lowerLibraryName);

  // Replace "@<libraryName>-design-system/" to "@shoelace-style/" if it doesn't end with libraryName
  const regexPattern = new RegExp(`@${String(libraryName)}-design-system/(?!${lowerLibraryName}$)`, 'g');
  content = content.replace(regexPattern, '@shoelace-style/');

  return content;
}

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath); // Recursive call for directories
      const newDirName = replaceContent(fullPath);
      if (newDirName !== fullPath) {
        fs.renameSync(fullPath, newDirName);
      }
    } else {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const newContent = replaceContent(content);
      fs.writeFileSync(fullPath, newContent);

      const newFileName = replaceContent(fullPath);
      if (newFileName !== fullPath) {
        fs.renameSync(fullPath, newFileName);
      }
    }
  });
}

// Before downloading, clear the files and folders that don't match the "protected" globs

// Download the repo
// @ts-ignore
await download(`${repo}#${version}`, dest, (err) => {
  if (err) {
    console.error('Error downloading repo:', err);
    return;
  }

  deleteUnprotectedFiles(finalDest, config.protected || [], finalDest);
  deleteEmptyDirectories(finalDest, finalDest);
  processDirectory(dest);
  copyDirectory(dest, finalDest, config.protected || []);
});

outro(`You're all set!`);
