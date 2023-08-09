import '../../leonardo.ts';
import '../../themes/light.css';
import { html } from 'lit';

export default {
  title: 'Components/button',
  component: 'button',
};

export const Default = {
  render: (args: any) => html`<ld-button><ld-icon slot="prefix" name="info"></ld-icon>Duis adipisicing</ld-button>`,
};

export const Neutral = {
  render: (args: any) => html`<ld-button variant="neutral"><ld-icon slot="prefix" name="info"></ld-icon>Duis adipisicing</ld-button>`,
};

export const DefaultOutline = {
  render: (args: any) => html`<ld-button outline><ld-icon slot="prefix" name="info"></ld-icon>Duis adipisicing</ld-button>`,
};

export const NeutralOutline = {
  render: (args: any) => html`<ld-button variant="neutral" outline><ld-icon slot="prefix" name="info"></ld-icon>Duis adipisicing</ld-button>`,
};

export const NoPill = {
  render: (args: any) => html`<ld-button pill><ld-icon slot="prefix" name="info"></ld-icon>Duis adipisicing</ld-button>`,
};

export const NoCircle = {
  render: (args: any) => html`<ld-button circle><ld-icon slot="prefix" name="info"></ld-icon>Duis adipisicing</ld-button>`,
};
