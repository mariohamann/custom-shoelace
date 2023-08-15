# Custom Shoelace CLI

The Custom Shoelace CLI provides an interactive way to integrate components from the Shoelace library into your project, customize the library name, and set component prefixes. It offers several features, including the ability to download specific versions of Shoelace, add new components, regenerate files, and configure auto-generated files for integration with tools such as VS Code or `.gitignore`.

## How to Use

Simply run the CLI script and follow the on-screen prompts.

```bash
# install globally...
npx npx @custom-shoelace/cli

# ...or in your project
npm i -D @custom-shoelace/cli && npx @custom-shoelace/cli
```

## Features:

-   **Interactive CLI:** Engage with your configuration via an easy-to-use command-line interface.
-   **Shoelace Customization:** Set your library name, component prefix, vendor path, and target path.
-   **Component Management:** Choose specific Shoelace components to include in your project. Internal dependencies from Shoelace are automatically added!
-   **Version Management:** Download specific versions of the Shoelace library.
-   **VS Code Integration:** Automatically update your VS Code settings to mark autogenerated files as readonly (optional).
-   **Git Integration:** Easily add autogenerated files to your `.gitignore` (optional).

## Currently missing features:
- Optionally include Shoelace's tests
- Optionally include other stuff than components (e. g. themes, scripts, utilities etc.)
- Optionally autogenerate stories for Storybook

## Configuration API:

The configuration file (`custom-shoelace.config.json`) keeps track of user-defined settings and choices. Here's what each key in the configuration file means:

-   **libraryName:** The name of your library (only lowercase letters allowed).
-   **libraryPrefix:** The prefix used for your components (only lowercase letters allowed).
-   **vendorPath:** The path where the Shoelace library is downloaded.
-   **targetPath:** The path where autogenerated files will be placed.
-   **shoelaceVersion:** The version of the Shoelace library you wish to use.
-   **components:** An array of Shoelace components you've chosen to integrate.
-   **lockFilesForVSCode:** A boolean to decide whether autogenerated files should be marked as readonly in VS Code.
-   **vscodePath:** Path to your VS Code's settings.json file.
-   **updateGitignore:** A boolean to decide whether autogenerated files should be added to `.gitignore`.
-   **gitignorePath:** Path to your project's `.gitignore` file.

---

## Legal

This project is not affiliated with the Shoelace project.
Use at your own risk. No warranty expressed or implied for data losses or other damages resulting from the use of this software.
