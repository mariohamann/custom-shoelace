import '../../leonardo.ts';
import '../../themes/light.css';
import { html } from 'lit';

export default {
  title: 'Components/alert',
  component: 'alert',
};

export const Default = {
  render: (args: any) => html`<ld-alert open><ld-icon slot="icon" name="info"></ld-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</ld-alert>`,
};

export const Neutral = {
  render: (args: any) => html`<ld-alert variant="neutral" open><ld-icon slot="icon" name="info"></ld-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</ld-alert>`,
};

export const Success = {
  render: (args: any) => html`<ld-alert variant="success" open><ld-icon slot="icon" name="check_circle"></ld-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</ld-alert>`,
};

export const Warning = {
  render: (args: any) => html`<ld-alert variant="warning" open><ld-icon slot="icon" name="warning"></ld-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</ld-alert>`,
};

export const Danger = {
  render: (args: any) => html`<ld-alert variant="danger" open><ld-icon slot="icon" name="report"></ld-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</ld-alert>`,
};

export const Closable = {
  render: (args: any) => html`<ld-alert open closable><ld-icon slot="icon" name="info"></ld-icon>Duis adipisicing eu occaecat non cupidatat pariatur. Exercitation aliquip enim labore exercitation. Sit reprehenderit irure proident ea exercitation nulla ex adipisicing. Ullamco ullamco veniam nostrud velit ea officia id deserunt anim qui elit esse.</ld-alert>`,
};
