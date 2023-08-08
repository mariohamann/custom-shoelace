---
meta:
  title: Radio
  description: Radios allow the user to select a single option from a group.
layout: component
---

Radios are designed to be used with [radio groups](/components/radio-group).

```html:preview
<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio value="1">Option 1</ld-radio>
  <ld-radio value="2">Option 2</ld-radio>
  <ld-radio value="3">Option 3</ld-radio>
</ld-radio-group>
```

```jsx:react
import { LdRadio, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadio value="1">Option 1</LdRadio>
    <LdRadio value="2">Option 2</LdRadio>
    <LdRadio value="3">Option 3</LdRadio>
  </LdRadioGroup>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<ld-radio-group label="Select an option" name="a" value="3">
  <ld-radio value="1">Option 1</ld-radio>
  <ld-radio value="2">Option 2</ld-radio>
  <ld-radio value="3">Option 3</ld-radio>
</ld-radio-group>
```

```jsx:react
import { LdRadio, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="3">
    <LdRadio value="1">Option 1</LdRadio>
    <LdRadio value="2">Option 2</LdRadio>
    <LdRadio value="3">Option 3</LdRadio>
  </LdRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html:preview
<ld-radio-group label="Select an option" name="a" value="1">
  <ld-radio value="1">Option 1</ld-radio>
  <ld-radio value="2" disabled>Option 2</ld-radio>
  <ld-radio value="3">Option 3</ld-radio>
</ld-radio-group>
```

```jsx:react
import { LdRadio, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" name="a" value="1">
    <LdRadio value="1">Option 1</LdRadio>
    <LdRadio value="2" disabled>
      Option 2
    </LdRadio>
    <LdRadio value="3">Option 3</LdRadio>
  </LdRadioGroup>
);
```

## Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the radios' size.

```html preview
<ld-radio-group size="small" value="1">
  <ld-radio value="1">Small 1</ld-radio>
  <ld-radio value="2">Small 2</ld-radio>
  <ld-radio value="3">Small 3</ld-radio>
</ld-radio-group>

<br />

<ld-radio-group size="medium" value="1">
  <ld-radio value="1">Medium 1</ld-radio>
  <ld-radio value="2">Medium 2</ld-radio>
  <ld-radio value="3">Medium 3</ld-radio>
</ld-radio-group>

<br />

<ld-radio-group size="large" value="1">
  <ld-radio value="1">Large 1</ld-radio>
  <ld-radio value="2">Large 2</ld-radio>
  <ld-radio value="3">Large 3</ld-radio>
</ld-radio-group>
```

```jsx react
import { LdRadio } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdRadioGroup size="small" value="1">
      <LdRadio value="1">Small 1</LdRadio>
      <LdRadio value="2">Small 2</LdRadio>
      <LdRadio value="3">Small 3</LdRadio>
    </LdRadioGroup>

    <br />

    <LdRadioGroup size="medium" value="1">
      <LdRadio value="1">Medium 1</LdRadio>
      <LdRadio value="2">Medium 2</LdRadio>
      <LdRadio value="3">Medium 3</LdRadio>
    </LdRadioGroup>

    <br />

    <LdRadioGroup size="large" value="1">
      <LdRadio value="1">Large 1</LdRadio>
      <LdRadio value="2">Large 2</LdRadio>
      <LdRadio value="3">Large 3</LdRadio>
    </LdRadioGroup>
  </>
);
```
