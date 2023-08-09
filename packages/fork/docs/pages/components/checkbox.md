---
meta:
  title: Checkbox
  description: Checkboxes allow the user to toggle an option on or off.
layout: component
---

```html:preview
<ld-checkbox>Checkbox</ld-checkbox>
```

```jsx:react
import { LdCheckbox } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdCheckbox>Checkbox</LdCheckbox>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html:preview
<ld-checkbox checked>Checked</ld-checkbox>
```

```jsx:react
import { LdCheckbox } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdCheckbox checked>Checked</LdCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html:preview
<ld-checkbox indeterminate>Indeterminate</ld-checkbox>
```

```jsx:react
import { LdCheckbox } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdCheckbox indeterminate>Indeterminate</LdCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html:preview
<ld-checkbox disabled>Disabled</ld-checkbox>
```

```jsx:react
import { LdCheckbox } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdCheckbox disabled>Disabled</LdCheckbox>;
```

### Sizes

Use the `size` attribute to change a checkbox's size.

```html:preview
<ld-checkbox size="small">Small</ld-checkbox>
<br />
<ld-checkbox size="medium">Medium</ld-checkbox>
<br />
<ld-checkbox size="large">Large</ld-checkbox>
```

```jsx:react
import { LdCheckbox } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdCheckbox size="small">Small</LdCheckbox>
    <br />
    <LdCheckbox size="medium">Medium</LdCheckbox>
    <br />
    <LdCheckbox size="large">Large</LdCheckbox>
  </>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <ld-checkbox>Check me</ld-checkbox>
  <br />
  <ld-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</ld-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('ld-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('ld-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('ld-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

{% raw %}

```jsx:react
import { useEffect, useRef } from 'react';
import { LdButton, LdCheckbox } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <LdCheckbox ref={checkbox} onLdChange={handleChange}>
        Check me
      </LdCheckbox>
      <br />
      <LdButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </LdButton>
    </form>
  );
};
```

{% endraw %}
