---
meta:
  title: Select
  description: Selects allow you to choose items from a menu of predefined options.
layout: component
---

```html:preview
<ld-select>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
  <ld-option value="option-4">Option 4</ld-option>
  <ld-option value="option-5">Option 5</ld-option>
  <ld-option value="option-6">Option 6</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
    <LdOption value="option-4">Option 4</LdOption>
    <LdOption value="option-5">Option 5</LdOption>
    <LdOption value="option-6">Option 6</LdOption>
  </LdSelect>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<ld-select label="Select one">
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect label="Select one">
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<ld-select label="Experience" help-text="Please tell us your skill level.">
  <ld-option value="1">Novice</ld-option>
  <ld-option value="2">Intermediate</ld-option>
  <ld-option value="3">Advanced</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect label="Experience" help-text="Please tell us your skill level.">
    <LdOption value="1">Novice</LdOption>
    <LdOption value="2">Intermediate</LdOption>
    <LdOption value="3">Advanced</LdOption>
  </LdSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<ld-select placeholder="Select one">
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect placeholder="Select one">
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

```html:preview
<ld-select clearable value="option-1">
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect placeholder="Clearable" clearable>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html:preview
<ld-select filled>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect filled>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html:preview
<ld-select pill>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect pill>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html:preview
<ld-select placeholder="Disabled" disabled>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect placeholder="Disabled" disabled>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.

```html:preview
<ld-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
  <ld-option value="option-4">Option 4</ld-option>
  <ld-option value="option-5">Option 5</ld-option>
  <ld-option value="option-6">Option 6</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
    <LdOption value="option-4">Option 4</LdOption>
    <LdOption value="option-5">Option 5</LdOption>
    <LdOption value="option-6">Option 6</LdOption>
  </LdSelect>
);
```

:::tip
Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.
:::

### Setting Initial Values

Use the `value` attribute to set the initial selection. When using `multiple`, use space-delimited values to select more than one option.

```html:preview
<ld-select value="option-1 option-2" multiple clearable>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
  <ld-option value="option-4">Option 4</ld-option>
</ld-select>
```

```jsx:react
import { LdDivider, LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect value="option-1 option-2" multiple clearable>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

### Grouping Options

Use `<ld-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html:preview
<ld-select>
  <small>Section 1</small>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
  <ld-divider></ld-divider>
  <small>Section 2</small>
  <ld-option value="option-4">Option 4</ld-option>
  <ld-option value="option-5">Option 5</ld-option>
  <ld-option value="option-6">Option 6</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
    <LdOption value="option-4">Option 4</LdOption>
    <LdOption value="option-5">Option 5</LdOption>
    <LdOption value="option-6">Option 6</LdOption>
  </LdSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options.

```html:preview
<ld-select placeholder="Small" size="small">
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>

<br />

<ld-select placeholder="Medium" size="medium">
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>

<br />

<ld-select placeholder="Large" size="large">
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdSelect placeholder="Small" size="small">
      <LdOption value="option-1">Option 1</LdOption>
      <LdOption value="option-2">Option 2</LdOption>
      <LdOption value="option-3">Option 3</LdOption>
    </LdSelect>

    <br />

    <LdSelect placeholder="Medium" size="medium">
      <LdOption value="option-1">Option 1</LdOption>
      <LdOption value="option-2">Option 2</LdOption>
      <LdOption value="option-3">Option 3</LdOption>
    </LdSelect>

    <br />

    <LdSelect placeholder="Large" size="large">
      <LdOption value="option-1">Option 1</LdOption>
      <LdOption value="option-2">Option 2</LdOption>
      <LdOption value="option-3">Option 3</LdOption>
    </LdSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html:preview
<ld-select placement="top">
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import {
  LdOption,
  LdSelect
} from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect placement="top">
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdDropdown>
);
```

### Prefix Icons

Use the `prefix` slot to prepend an icon to the control.

```html:preview
<ld-select placeholder="Small" size="small" clearable>
  <ld-icon name="house" slot="prefix"></ld-icon>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
<br />
<ld-select placeholder="Medium" size="medium" clearable>
  <ld-icon name="house" slot="prefix"></ld-icon>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
<br />
<ld-select placeholder="Large" size="large" clearable>
  <ld-icon name="house" slot="prefix"></ld-icon>
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2">Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdIcon, LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdSelect placeholder="Small" size="small">
      <LdIcon name="house" slot="prefix"></LdIcon>
      <LdOption value="option-1">Option 1</LdOption>
      <LdOption value="option-2">Option 2</LdOption>
      <LdOption value="option-3">Option 3</LdOption>
    </LdSelect>
    <br />
    <LdSelect placeholder="Medium" size="medium">
      <LdIcon name="house" slot="prefix"></LdIcon>
      <LdOption value="option-1">Option 1</LdOption>
      <LdOption value="option-2">Option 2</LdOption>
      <LdOption value="option-3">Option 3</LdOption>
    </LdSelect>
    <br />
    <LdSelect placeholder="Large" size="large">
      <LdIcon name="house" slot="prefix"></LdIcon>
      <LdOption value="option-1">Option 1</LdOption>
      <LdOption value="option-2">Option 2</LdOption>
      <LdOption value="option-3">Option 3</LdOption>
    </LdSelect>
  </>
);
```
