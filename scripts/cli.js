#!/usr/bin/env node

import { intro, outro, text, select, confirm, spinner, isCancel, cancel } from '@clack/prompts';
import download from 'download-git-repo';
import fs from 'fs';
import path from 'path';
import { getDependencies } from './get-dependencies.js';
import { resetDirectory, createFiles } from './create-autogenerated-files.js';
import { changeShoelaceBranding } from './change-shoelace-branding.js';
import { updateReadonlyFiles } from './lock-autogenerated-files.js';
import { updateReadonlyFilesForGit } from './update-gitignore.js';

const CONFIG_FILE = 'custom-shoelace.config.json';
const repo = 'shoelace-style/shoelace';

const DEFAULTS = {
  VENDOR_PATH: '.vendor',
  TARGET_PATH: '.',
  VSCODE_PATH: '.vscode/settings.json',
  GITIGNORE_PATH: '.gitignore',
};

intro('🥾 Custom Shoelace CLI');

function readConfig() {
  return fs.existsSync(CONFIG_FILE) ? JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8')) : {};
}

function saveConfig(config) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
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
  let config = readConfig();

  if (!config.libraryName) {
    config.libraryName = await text({
      message: "What's the name of your library? (only lowercase letters)",
      placeholder: 'shoelace',
      validate(value) {
        if (!/^[a-z]+$/.test(value)) return 'Only lowercase letters are allowed';
      },
    });
    saveConfig(config);
  }

  if (!config.libraryPrefix) {
    config.libraryPrefix = await text({
      message: "What's the prefix of your components? (only lowercase letters)",
      placeholder: 'sl',
      validate(value) {
        if (!/^[a-z]+$/.test(value)) return 'Only lowercase letters are allowed';
      },
    });
    saveConfig(config);
  }

  // Vendor Path
  if (!config.vendorPath) {
    config.vendorPath = await text({
      message: 'Enter vendor path:',
      placeholder: DEFAULTS.VENDOR_PATH,
      initialValue: DEFAULTS.VENDOR_PATH
    });
    saveConfig(config);
  }

  // Target Path
  if (!config.targetPath) {
    config.targetPath = await text({
      message: 'Enter target path:',
      placeholder: DEFAULTS.TARGET_PATH,
      initialValue: DEFAULTS.TARGET_PATH
    });
    saveConfig(config);
  }

  const command = await select({
    message: 'What do you want to do?',
    options: [
      { value: 'add', label: 'Add component', hint: 'This will add a new component from Shoelace to your library. This will reset all autogenerated files.' },
      { value: 'autogenerate', label: 'Regenerate Shoelace files', hint: 'This will include all dependent scripts and components, too.' },
      { value: 'download', label: 'Download Shoelace', hint: 'This will automatically generate your Shoelace files, too.' },
    ],
  });

  if (isCancel(command)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  const s = spinner();

  if (command === 'download') {
    // Shoelace version
    if (!config.shoelaceVersion) {
      config.shoelaceVersion = await select({
        message: 'Which version do you want to install?',
        options: [
          'next', 'v2.7.0', 'v2.6.0', 'v2.5.2', 'v2.5.1', 'v2.5.0', 'v2.4.0', 'v2.3.0', 'v2.2.0', 'v2.1.0', 'v2.0.0'
        ].map(value => ({ value })),
      });
      saveConfig(config);
    }

    if (isCancel(config.shoelaceVersion)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    const shouldContinue = await confirm({
      message: `Do you want to continue? This will delete everything in ${config.vendorPath}, remove your old autogenerated files create the new ones.`,
    });

    if (isCancel(shouldContinue) || !shouldContinue) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    // Cleanup target directory before downloading
    deleteFolderRecursive(config.vendorPath);
    fs.mkdirSync(config.vendorPath, { recursive: true });


    s.start(`⏳ Downloading Shoelace ${config.shoelaceVersion}`);
    await new Promise((resolve, reject) => {
      download(`${repo}#${config.shoelaceVersion}`, config.vendorPath, err => {
        if (err) reject(`Error downloading repo: ${err}`);
        else resolve();
      });
    });
    s.stop(`✅ Download completed`);

    s.start(`⏳ Update library name + prefix`);
    changeShoelaceBranding(config.vendorPath, config.libraryName, config.libraryPrefix);
    s.stop(`✅ Library name + prefix updated`);
  }
  saveConfig(config);

  if (command === 'add' || config.components.length === 0) {
    const newComponent = await text({
      message: 'Which component would you like to install?',
      placeholder: 'e. g. "alert"',
      validate(value) {
        const availableComponents = fs.readdirSync(path.join(config.vendorPath, 'src', 'components'), { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);
        // check if value is in availableComponents
        if (!availableComponents.includes(value)) return 'Component not found in Shoelace';
      },
    });
    config.components = [...config.components, newComponent].sort();
  }

  s.start(`⏳ Calculate dependencies`);
  const files = await getDependencies(
    config.components.map(component => `src/components/${component}/${component}.ts`),
    config.vendorPath
  );
  s.stop(`✅ Dependencies calculated`);

  s.start(`⏳ Remove old autogenerated files`);
  await resetDirectory(config.targetPath);
  s.stop(`✅ Old autogenerated files removed`);

  s.start(`⏳ Write new autogenerated files`);

  let createdFiles = [];
  for (const file of files) {
    const newFiles = await createFiles(config.vendorPath, config.targetPath, file);
    createdFiles = [...createdFiles, ...newFiles];
  }
  s.stop(`✅ New autogenerated files written`);

  if (config.lockFilesForVSCode === undefined) {
    config.lockFilesForVSCode = await confirm({
      message: 'Do you want to mark the autogenerated files as readonly for VS Code?',
    });

    // ask for VSCode path
    if (config.lockFilesForVSCode) {
      config.vscodePath = await text({
        message: 'Enter VS Code path:',
        placeholder: DEFAULTS.VSCODE_PATH,
        initialValue: DEFAULTS.VSCODE_PATH
      });
    }
  }

  saveConfig(config);

  if (config.lockFilesForVSCode) {
    s.start(`⏳ Lock autogenerated files`);
    updateReadonlyFiles(createdFiles, config.vscodePath || undefined); // Ensure `createdFiles` is defined and has the list of files you created
    s.stop(`✅ Autogenerated files locked`);
  }

  if (config.updateGitignore === undefined) {
    config.updateGitignore = await confirm({
      message: 'Do you want to add the autogenerated files to .gitignore?',
    });

    // ask for .gitignore path
    if (config.updateGitignore) {
      config.gitignorePath = await text({
        message: 'Enter .gitignore path:',
        placeholder: DEFAULTS.GITIGNORE_PATH,
        initialValue: DEFAULTS.GITIGNORE_PATH
      });
    }
  }

  saveConfig(config);

  if (config.updateGitignore) {
    s.start(`⏳ Ignore autogenerated files`);
    updateReadonlyFilesForGit(createdFiles, config.gitignorePath || undefined); // Ensure `createdFiles` is defined and has the list of files you created
    s.stop(`✅ Autogenerated files ignored`);
  }

  outro(`🎉 ${config.libraryName} is now set. Remember to update ${config.libraryName}.ts if you added/removed components.`);
}
main();
