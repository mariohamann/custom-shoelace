import type { Preview } from "@storybook/web-components";

import { registerIconLibrary } from '../../components/src/utilities/icon-library.js';
registerIconLibrary('default', {
  resolver: name => {
    const match = name.match(/^(.*?)(_(round|sharp))?$/);
    return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'baseline'}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

