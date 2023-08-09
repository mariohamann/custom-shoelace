import '../../leonardo.ts';
import '../../themes/light.css';
import { html } from 'lit';

export default {
  title: 'Components/status-text',
  component: 'status-text',
};

export const Default = {
  render: (args: any) => html`<ld-status-text>This is a warning-text</ld-status-text>`,
};
