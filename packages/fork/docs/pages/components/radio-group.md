---
meta:
  title: Radio Group
  description: Radio groups are used to group multiple radios or radio buttons so they function as a single form control.
layout: component
---

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

## Examples

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<ld-radio-group label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
  <ld-radio value="1">Option 1</ld-radio>
  <ld-radio value="2">Option 2</ld-radio>
  <ld-radio value="3">Option 3</ld-radio>
</ld-radio-group>
```

```jsx:react
import { LdRadio, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <LdRadio value="1">Option 1</LdRadio>
    <LdRadio value="2">Option 2</LdRadio>
    <LdRadio value="3">Option 3</LdRadio>
  </LdRadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html:preview
<ld-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
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

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

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

### Sizing Options

The size of [Radios](/components/radio) and [Radio Buttons](/components/radio-buttons) will be determined by the Radio Group's `size` attribute.

```html preview
<ld-radio-group label="Select an option" size="medium" value="medium" class="radio-group-size">
  <ld-radio value="small">Small</ld-radio>
  <ld-radio value="medium">Medium</ld-radio>
  <ld-radio value="large">Large</ld-radio>
</ld-radio-group>

<script>
  const radioGroup = document.querySelector('.radio-group-size');

  radioGroup.addEventListener('ld-change', () => {
    radioGroup.size = radioGroup.value;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { LdRadio, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [size, setSize] = useState('medium');

  return (
    <>
      <LdRadioGroup
        label="Select an option"
        size={size}
        value={size}
        class="radio-group-size"
        onLdChange={event => setSize(event.target.value)}
      >
        <LdRadio value="small">Small</LdRadio>
        <LdRadio value="medium">Medium</LdRadio>
        <LdRadio value="large">Large</LdRadio>
      </LdRadioGroup>
    </>
  );
};
```

:::tip
[Radios](/components/radio) and [Radio Buttons](/components/radio-button) also have a `size` attribute. This can be useful in certain compositions, but it will be ignored when used inside of a Radio Group.
:::

### Validation

Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html:preview
<form class="validation">
  <ld-radio-group label="Select an option" name="a" required>
    <ld-radio value="1">Option 1</ld-radio>
    <ld-radio value="2">Option 2</ld-radio>
    <ld-radio value="3">Option 3</ld-radio>
  </ld-radio-group>
  <br />
  <ld-button type="submit" variant="primary">Submit</ld-button>
</form>

<script>
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import { LdButton, LdIcon, LdRadio, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <LdRadioGroup label="Select an option" name="a" required onLdChange={handleChange}>
        <LdRadio value="1">
          Option 1
        </LdRadio>
        <LdRadiovalue="2">
          Option 2
        </LdRadio>
        <LdRadio value="3">
          Option 3
        </LdRadio>
      </LdRadioGroup>
      <br />
      <LdButton type="submit" variant="primary">
        Submit
      </LdButton>
    </form>
  );
};
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <ld-radio-group label="Select an option" name="a" value="1">
    <ld-radio value="1">Not me</ld-radio>
    <ld-radio value="2">Me neither</ld-radio>
    <ld-radio value="3">Choose me</ld-radio>
  </ld-radio-group>
  <br />
  <ld-button type="submit" variant="primary">Submit</ld-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('ld-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('ld-radio').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('ld-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import { useEffect, useRef } from 'react';
import { LdButton, LdIcon, LdRadio, LdRadioGroup } from '@shoelace-style/leonardo/dist/react';
const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'You must choose this option';

  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <LdRadioGroup ref={radioGroup} label="Select an option" name="a" value="1" onLdChange={handleChange}>
        <LdRadio value="1">Not me</LdRadio>
        <LdRadio value="2">Me neither</LdRadio>
        <LdRadio value="3">Choose me</LdRadio>
      </LdRadioGroup>
      <br />
      <LdButton type="submit" variant="primary">
        Submit
      </LdButton>
    </form>
  );
};
```
