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

  config.name = libraryName;  // save to config
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

  config.prefix = libraryPrefix;  // save to config
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


function deleteUnprotectedFiles(directory, protectedGlobs) {
  const allFilesAndFolders = fs.readdirSync(directory);

  for (const item of allFilesAndFolders) {
    const fullPath = path.join(directory, item);

    if (fs.statSync(fullPath).isDirectory()) {
      deleteUnprotectedFiles(fullPath, protectedGlobs);  // Recursive call for directories
    } else {
      let shouldDelete = true;
      for (const pattern of protectedGlobs) {
        if (glob.sync(pattern, { cwd: directory }).includes(item)) {
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

function deleteEmptyDirectories(directory) {
  const items = fs.readdirSync(directory);

  if (items.length === 0) {
    fs.rmdirSync(directory);
    return;
  }

  for (const item of items) {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      deleteEmptyDirectories(fullPath);
    }
  }

  // Check again after going through subdirectories
  if (fs.readdirSync(directory).length === 0) {
    fs.rmdirSync(directory);
  }
}

// Before downloading, clear the files and folders that don't match the "protected" globs
deleteUnprotectedFiles(finalDest, config.protected || []);

// Then, delete the empty directories
deleteEmptyDirectories(finalDest);

// // Download the repo
// // @ts-ignore
// download(`${repo}#${version}`, dest, (err) => {
//   if (err) {
//     console.error('Error downloading repo:', err);
//     return;
//   }

//   // The replacements script:
//   function replaceContent(content) {
//     return content
//       .replace(/Sl(?=[A-Z])/g, String(libraryPrefix).charAt(0).toUpperCase() + String(libraryPrefix).slice(1))
//       .replace(/(?<![A-Za-z])sl-/g, `${String(libraryPrefix)}-`)
//       .replace(/shoelace-style/g, `${String(libraryName)}-design-system`)
//       .replace(/Shoelace/g, String(libraryName).charAt(0).toUpperCase() + String(libraryName).slice(1))
//       .replace(/shoelace/g, String(libraryName));
//   }

//   function processDirectory(directory) {
//     fs.readdirSync(directory).forEach(file => {
//       const fullPath = path.join(directory, file);
//       const stat = fs.statSync(fullPath);

//       if (stat.isDirectory()) {
//         processDirectory(fullPath); // Recursive call for directories
//         const newDirName = replaceContent(fullPath);
//         if (newDirName !== fullPath) {
//           fs.renameSync(fullPath, newDirName);
//         }
//       } else {
//         const content = fs.readFileSync(fullPath, 'utf-8');
//         const newContent = replaceContent(content);
//         fs.writeFileSync(fullPath, newContent);

//         const newFileName = replaceContent(fullPath);
//         if (newFileName !== fullPath) {
//           fs.renameSync(fullPath, newFileName);
//         }
//       }
//     });
//   }

//   processDirectory(dest);

// });


outro(`You're all set!`);
