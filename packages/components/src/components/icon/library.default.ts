import type { IconLibrary } from './library.js';

const library: IconLibrary = {
  name: 'default',
  resolver: name => {
    const match = name.match(/^(.*?)(_(round|sharp))?$/);
    return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'baseline'}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
};

export default library;
