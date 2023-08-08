---
meta:
  title: Switch
  description: Switches allow the user to toggle an option on or off.
layout: component
---

```html:preview
<ld-switch>Switch</ld-switch>
```

```jsx:react
import { LdSwitch } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdSwitch>Switch</LdSwitch>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html:preview
<ld-switch checked>Checked</ld-switch>
```

```jsx:react
import { LdSwitch } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdSwitch checked>Checked</LdSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html:preview
<ld-switch disabled>Disabled</ld-switch>
```

```jsx:react
import { LdSwitch } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdSwitch disabled>Disabled</LdSwitch>;
```

### Sizes

Use the `size` attribute to change a switch's size.

```html:preview
<ld-switch size="small">Small</ld-switch>
<br />
<ld-switch size="medium">Medium</ld-switch>
<br />
<ld-switch size="large">Large</ld-switch>
```

```jsx:react
import { LdSwitch } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdSwitch size="small">Small</LdSwitch>
    <br />
    <LdSwitch size="medium">Medium</LdSwitch>
    <br />
    <LdSwitch size="large">Large</LdSwitch>
  </>
);
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html:preview
<ld-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</ld-switch>
```

{% raw %}

```jsx:react
import { LdSwitch } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

{% endraw %}
