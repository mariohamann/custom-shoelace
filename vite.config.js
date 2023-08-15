import packageJson from "./package.json";
import { replaceCodePlugin } from "vite-plugin-replace";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    replaceCodePlugin({
      replacements: [
        {
          from: "__PACKAGE_VERSION__",
          to: `'${packageJson.version}'`,
        },
      ],
    }),
  ],
}
