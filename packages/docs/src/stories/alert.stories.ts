import '../../../components/src/shoelace.ts';
import '../../../components/src/themes/light.css';
import { html } from 'lit';

export default {
  title: 'Components/alert',
  component: 'alert',
};

export const Default = {
  render: (args: any) => html`<sl-alert open><sl-icon slot="icon" name="info"></sl-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</sl-alert>`,
};

export const Neutral = {
  render: (args: any) => html`<sl-alert variant="neutral" open><sl-icon slot="icon" name="info"></sl-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</sl-alert>`,
};

export const Success = {
  render: (args: any) => html`<sl-alert variant="success" open><sl-icon slot="icon" name="check_circle"></sl-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</sl-alert>`,
};

export const Warning = {
  render: (args: any) => html`<sl-alert variant="warning" open><sl-icon slot="icon" name="warning"></sl-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</sl-alert>`,
};

export const Danger = {
  render: (args: any) => html`<sl-alert variant="danger" open><sl-icon slot="icon" name="report"></sl-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</sl-alert>`,
};

export const Closable = {
  render: (args: any) => html`<sl-alert open closable><sl-icon slot="icon" name="info"></sl-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</sl-alert>`,
};
