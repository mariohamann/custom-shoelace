// updateSettings.js
import fs from 'fs';

/**
 * Update .vscode/settings.json to set files.readonlyInclude based on provided files.
 * 
 * @param {string[]} filesArray - An array of file paths to be set as readonly.
 * @param {string} settingsPath - Path to the .vscode/settings.json file.
 */
export function updateReadonlyFiles(filesArray, settingsPath = '.vscode/settings.json') {
  try {
    // Default settings object
    let settings = {};

    // If settings.json exists, read and parse it
    if (fs.existsSync(settingsPath)) {
      const rawData = fs.readFileSync(settingsPath, 'utf8');
      settings = JSON.parse(rawData);
    }

    const readonlyFiles = {};
    for (const file of filesArray) {
      readonlyFiles[file] = true;
    }

    // Override files.readonlyInclude with the provided files object
    settings['files.readonlyInclude'] = readonlyFiles;

    // Write the updated settings back to settings.json
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 4), 'utf8');

    console.log(`Updated ${settingsPath} successfully!`);
  } catch (error) {
    console.error('An error occurred while updating settings:', error);
  }
}

export default updateReadonlyFiles;
