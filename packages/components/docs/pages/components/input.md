---
meta:
  title: Input
  description: Inputs collect data from the user.
layout: component
---

```html:preview
<ld-input></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdInput />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<ld-input label="What is your name?"></ld-input>
```

```jsx:react
import { LdIcon, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<ld-input label="Nickname" help-text="What would you like people to call you?"></ld-input>
```

```jsx:react
import { LdIcon, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<ld-input placeholder="Type something"></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html:preview
<ld-input placeholder="Clearable" clearable></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html:preview
<ld-input type="password" placeholder="Password Toggle" password-toggle></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdInput type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html:preview
<ld-input placeholder="Type something" filled></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdInput placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable an input.

```html:preview
<ld-input placeholder="Disabled" disabled></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdInput placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size.

```html:preview
<ld-input placeholder="Small" size="small"></ld-input>
<br />
<ld-input placeholder="Medium" size="medium"></ld-input>
<br />
<ld-input placeholder="Large" size="large"></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdInput placeholder="Small" size="small" />
    <br />
    <LdInput placeholder="Medium" size="medium" />
    <br />
    <LdInput placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html:preview
<ld-input placeholder="Small" size="small" pill></ld-input>
<br />
<ld-input placeholder="Medium" size="medium" pill></ld-input>
<br />
<ld-input placeholder="Large" size="large" pill></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdInput placeholder="Small" size="small" pill />
    <br />
    <LdInput placeholder="Medium" size="medium" pill />
    <br />
    <LdInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html:preview
<ld-input type="email" placeholder="Email"></ld-input>
<br />
<ld-input type="number" placeholder="Number"></ld-input>
<br />
<ld-input type="date" placeholder="Date"></ld-input>
```

```jsx:react
import { LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdInput type="email" placeholder="Email" />
    <br />
    <LdInput type="number" placeholder="Number" />
    <br />
    <LdInput type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<ld-input placeholder="Small" size="small">
  <ld-icon name="house" slot="prefix"></ld-icon>
  <ld-icon name="chat" slot="suffix"></ld-icon>
</ld-input>
<br />
<ld-input placeholder="Medium" size="medium">
  <ld-icon name="house" slot="prefix"></ld-icon>
  <ld-icon name="chat" slot="suffix"></ld-icon>
</ld-input>
<br />
<ld-input placeholder="Large" size="large">
  <ld-icon name="house" slot="prefix"></ld-icon>
  <ld-icon name="chat" slot="suffix"></ld-icon>
</ld-input>
```

```jsx:react
import { LdIcon, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdInput placeholder="Small" size="small">
      <LdIcon name="house" slot="prefix"></LdIcon>
      <LdIcon name="chat" slot="suffix"></LdIcon>
    </LdInput>
    <br />
    <LdInput placeholder="Medium" size="medium">
      <LdIcon name="house" slot="prefix"></LdIcon>
      <LdIcon name="chat" slot="suffix"></LdIcon>
    </LdInput>
    <br />
    <LdInput placeholder="Large" size="large">
      <LdIcon name="house" slot="prefix"></LdIcon>
      <LdIcon name="chat" slot="suffix"></LdIcon>
    </LdInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html:preview
<ld-input class="label-on-left" label="Name" help-text="Enter your name"></ld-input>
<ld-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></ld-input>
<ld-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></ld-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--ld-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--ld-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```
