---
meta:
  title: Radio Button
  description: Radios buttons allow the user to select a single option from a group using a button-like control.
layout: component
---

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html:preview
<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button value="1">Option 1</ld-radio-button>
  <ld-radio-button value="2">Option 2</ld-radio-button>
  <ld-radio-button value="3">Option 3</ld-radio-button>
</ld-radio-group>
```

```jsx:react
import { LdRadioButton, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton value="1">Option 1</LdRadioButton>
    <LdRadioButton value="2">Option 2</LdRadioButton>
    <LdRadioButton value="3">Option 3</LdRadioButton>
  </LdRadioGroup>
);
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button value="1">Option 1</ld-radio-button>
  <ld-radio-button value="2">Option 2</ld-radio-button>
  <ld-radio-button value="3">Option 3</ld-radio-button>
</ld-radio-group>
```

```jsx:react
import { LdRadioButton, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton value="1">Option 1</LdRadioButton>
    <LdRadioButton value="2">Option 2</LdRadioButton>
    <LdRadioButton value="3">Option 3</LdRadioButton>
  </LdRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html:preview
<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button value="1">Option 1</ld-radio-button>
  <ld-radio-button value="2" disabled>Option 2</ld-radio-button>
  <ld-radio-button value="3">Option 3</ld-radio-button>
</ld-radio-group>
```

```jsx:react
import { LdRadioButton, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton value="1">Option 1</LdRadioButton>
    <LdRadioButton value="2" disabled>
      Option 2
    </LdRadioButton>
    <LdRadioButton value="3">Option 3</LdRadioButton>
  </LdRadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html:preview
<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button size="small" value="1">Option 1</ld-radio-button>
  <ld-radio-button size="small" value="2">Option 2</ld-radio-button>
  <ld-radio-button size="small" value="3">Option 3</ld-radio-button>
</ld-radio-group>

<br />

<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button size="medium" value="1">Option 1</ld-radio-button>
  <ld-radio-button size="medium" value="2">Option 2</ld-radio-button>
  <ld-radio-button size="medium" value="3">Option 3</ld-radio-button>
</ld-radio-group>

<br />

<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button size="large" value="1">Option 1</ld-radio-button>
  <ld-radio-button size="large" value="2">Option 2</ld-radio-button>
  <ld-radio-button size="large" value="3">Option 3</ld-radio-button>
</ld-radio-group>
```

```jsx:react
import { LdRadioButton, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton size="small" value="1">Option 1</LdRadioButton>
    <LdRadioButton size="small" value="2">Option 2</LdRadioButton>
    <LdRadioButton size="small" value="3">Option 3</LdRadioButton>
  </LdRadioGroup>

  <br />

  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton size="medium" value="1">Option 1</LdRadioButton>
    <LdRadioButton size="medium" value="2">Option 2</LdRadioButton>
    <LdRadioButton size="medium" value="3">Option 3</LdRadioButton>
  </LdRadioGroup>

  <br />

  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton size="large" value="1">Option 1</LdRadioButton>
    <LdRadioButton size="large" value="2">Option 2</LdRadioButton>
    <LdRadioButton size="large" value="3">Option 3</LdRadioButton>
  </LdRadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html:preview
<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button pill size="small" value="1">Option 1</ld-radio-button>
  <ld-radio-button pill size="small" value="2">Option 2</ld-radio-button>
  <ld-radio-button pill size="small" value="3">Option 3</ld-radio-button>
</ld-radio-group>

<br />

<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button pill size="medium" value="1">Option 1</ld-radio-button>
  <ld-radio-button pill size="medium" value="2">Option 2</ld-radio-button>
  <ld-radio-button pill size="medium" value="3">Option 3</ld-radio-button>
</ld-radio-group>

<br />

<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button pill size="large" value="1">Option 1</ld-radio-button>
  <ld-radio-button pill size="large" value="2">Option 2</ld-radio-button>
  <ld-radio-button pill size="large" value="3">Option 3</ld-radio-button>
</ld-radio-group>
```

```jsx:react
import { LdRadioButton, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton pill size="small" value="1">Option 1</LdRadioButton>
    <LdRadioButton pill size="small" value="2">Option 2</LdRadioButton>
    <LdRadioButton pill size="small" value="3">Option 3</LdRadioButton>
  </LdRadioGroup>

  <br />

  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton pill size="medium" value="1">Option 1</LdRadioButton>
    <LdRadioButton pill size="medium" value="2">Option 2</LdRadioButton>
    <LdRadioButton pill size="medium" value="3">Option 3</LdRadioButton>
  </LdRadioGroup>

  <br />

  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton pill size="large" value="1">Option 1</LdRadioButton>
    <LdRadioButton pill size="large" value="2">Option 2</LdRadioButton>
    <LdRadioButton pill size="large" value="3">Option 3</LdRadioButton>
  </LdRadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio-button value="1">
    <ld-icon slot="prefix" name="archive"></ld-icon>
    Option 1
  </ld-radio-button>

  <ld-radio-button value="2">
    <ld-icon slot="suffix" name="bag"></ld-icon>
    Option 2
  </ld-radio-button>

  <ld-radio-button value="3">
    <ld-icon slot="prefix" name="gift"></ld-icon>
    <ld-icon slot="suffix" name="cart"></ld-icon>
    Option 3
  </ld-radio-button>
</ld-radio-group>
```

```jsx:react
import { LdIcon, LdRadioButton, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadioButton value="1">
      <LdIcon slot="prefix" name="archive" />
      Option 1
    </LdRadioButton>

    <LdRadioButton value="2">
      <LdIcon slot="suffix" name="bag" />
      Option 2
    </LdRadioButton>

    <LdRadioButton value="3">
      <LdIcon slot="prefix" name="gift" />
      <LdIcon slot="suffix" name="cart" />
      Option 3
    </LdRadioButton>
  </LdRadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html:preview
<ld-radio-group label="Select an option" name="a" value="neutral">
  <ld-radio-button value="angry">
    <ld-icon name="emoji-angry" label="Angry"></ld-icon>
  </ld-radio-button>

  <ld-radio-button value="sad">
    <ld-icon name="emoji-frown" label="Sad"></ld-icon>
  </ld-radio-button>

  <ld-radio-button value="neutral">
    <ld-icon name="emoji-neutral" label="Neutral"></ld-icon>
  </ld-radio-button>

  <ld-radio-button value="happy">
    <ld-icon name="emoji-smile" label="Happy"></ld-icon>
  </ld-radio-button>

  <ld-radio-button value="laughing">
    <ld-icon name="emoji-laughing" label="Laughing"></ld-icon>
  </ld-radio-button>
</ld-radio-group>
```

```jsx:react
import { LdIcon, LdRadioButton, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="neutral">
    <LdRadioButton value="angry">
      <LdIcon name="emoji-angry" label="Angry" />
    </LdRadioButton>

    <LdRadioButton value="sad">
      <LdIcon name="emoji-frown" label="Sad" />
    </LdRadioButton>

    <LdRadioButton value="neutral">
      <LdIcon name="emoji-neutral" label="Neutral" />
    </LdRadioButton>

    <LdRadioButton value="happy">
      <LdIcon name="emoji-smile" label="Happy" />
    </LdRadioButton>

    <LdRadioButton value="laughing">
      <LdIcon name="emoji-laughing" label="Laughing" />
    </LdRadioButton>
  </LdRadioGroup>
);
```
