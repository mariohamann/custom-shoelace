import { replaceCodePlugin } from "vite-plugin-replace";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    replaceCodePlugin({
      replacements: [
        {
          from: "__SHOELACE_VERSION__",
          to: JSON.stringify('1.0.0'),
        },
      ],
    }),
  ],
}
