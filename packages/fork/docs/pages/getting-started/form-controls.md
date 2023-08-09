---
meta:
  title: Form Controls
  description: Some things to note about Leonardo and forms.
---

# Form Controls

Every Leonardo component makes use of a [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) to encapsulate markup, styles, and behavior. One caveat of this approach is that native `<form>` elements do not recognize form controls located inside a shadow root.

Leonardo solves this problem by using the [`formdata`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event) event, which is [available in all modern browsers](https://caniuse.com/mdn-api_htmlformelement_formdata_event). This means, when a form is submitted, Leonardo form controls will automatically append their values to the `FormData` object that's used to submit the form. In most cases, things will "just work." However, if you're using a form serialization library, it might need to be adapted to recognize Leonardo form controls.

:::tip
Leonardo uses event listeners to intercept the form's `formdata` and `submit` events. This allows it to inject data and trigger validation as necessary. If you're also attaching an event listener to the form, _you must attach it after Leonardo form controls are connected to the DOM_, otherwise your logic will run before Leonardo has a chance to inject form data and validate form controls.
:::

## Data Serialization

Serialization is just a fancy word for collecting form data. If you're relying on standard form submissions, e.g. `<form action="...">`, you can probably skip this section. However, most modern apps use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or a library such as [axios](https://github.com/axios/axios) to submit forms using JavaScript.

The [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) interface offers a standard way to serialize forms in the browser. You can create a `FormData` object from any `<form>` element like this.

```js
const form = document.querySelector('form');
const data = new FormData(form);

// All form control data is available in a FormData object
```

However, some folks find `FormData` tricky to work with or they need to pass a JSON payload to their server. To accommodate this, Leonardo offers a serialization utility that gathers form data and returns a simple JavaScript object instead.

```js
import { serialize } from '@shoelace-style/leonardo/dist/utilities/form.js';

const form = document.querySelector('form');
const data = serialize(form);

// All form control data is available in a plain object
```

This results in an object with name/value pairs that map to each form control. If more than one form control shares the same name, the values will be passed as an array, e.g. `{ name: ['value1', 'value2'] }`.

## Constraint Validation

Client-side validation can be enabled through the browser's [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) for Leonardo form controls. You can activate it using attributes such as `required`, `pattern`, `minlength`, `maxlength`, etc. Leonardo implements many of the same attributes as native form controls, but check the documentation for a list of supported properties for each component.

If you don't want to use client-side validation, you can suppress this behavior by adding `novalidate` to the surrounding `<form>` element.

:::tip
If this syntax looks unfamiliar, don't worry! Most of what you're learning on this page is platform knowledge that applies to regular form controls, too.
:::

:::warning
Client-side validation can be used to improve the UX of forms, but it is not a replacement for server-side validation. **You should always validate and sanitize user input on the server!**
:::

### Required Fields

To make a field required, use the `required` attribute. Required fields will automatically receive a `*` after their labels. This is configurable through the `--ld-input-required-content` custom property.

The form will not be submitted if a required field is incomplete.

```html:preview
<form class="input-validation-required">
  <ld-input name="name" label="Name" required></ld-input>
  <br />
  <ld-select label="Favorite Animal" clearable required>
    <ld-option value="birds">Birds</ld-option>
    <ld-option value="cats">Cats</ld-option>
    <ld-option value="dogs">Dogs</ld-option>
    <ld-option value="other">Other</ld-option>
  </ld-select>
  <br />
  <ld-textarea name="comment" label="Comment" required></ld-textarea>
  <br />
  <ld-checkbox required>Check me before submitting</ld-checkbox>
  <br /><br />
  <ld-button type="submit" variant="primary">Submit</ld-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-required');

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('ld-button'),
    customElements.whenDefined('ld-checkbox'),
    customElements.whenDefined('ld-input'),
    customElements.whenDefined('ld-option'),
    customElements.whenDefined('ld-select'),
    customElements.whenDefined('ld-textarea')
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

```jsx:react
import { LdButton, LdCheckbox, LdInput, LdMenuItem, LdSelect, LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <LdInput name="name" label="Name" required />
      <br />
      <LdSelect label="Favorite Animal" clearable required>
        <LdMenuItem value="birds">Birds</LdMenuItem>
        <LdMenuItem value="cats">Cats</LdMenuItem>
        <LdMenuItem value="dogs">Dogs</LdMenuItem>
        <LdMenuItem value="other">Other</LdMenuItem>
      </LdSelect>
      <br />
      <LdTextarea name="comment" label="Comment" required></LdTextarea>
      <br />
      <LdCheckbox required>Check me before submitting</LdCheckbox>
      <br />
      <br />
      <LdButton type="submit" variant="primary">
        Submit
      </LdButton>
    </form>
  );
};
```

### Input Patterns

To restrict a value to a specific [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern), use the `pattern` attribute. This example only allows the letters A-Z, so the form will not submit if a number or symbol is entered. This only works with `<ld-input>` elements.

```html:preview
<form class="input-validation-pattern">
  <ld-input name="letters" required label="Letters" pattern="[A-Za-z]+"></ld-input>
  <br />
  <ld-button type="submit" variant="primary">Submit</ld-button>
  <ld-button type="reset" variant="default">Reset</ld-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-pattern');

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('ld-button'),
    customElements.whenDefined('ld-input')
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

```jsx:react
import { LdButton, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <LdInput name="letters" required label="Letters" pattern="[A-Za-z]+" />
      <br />
      <LdButton type="submit" variant="primary">
        Submit
      </LdButton>
    </form>
  );
};
```

### Input Types

Some input types will automatically trigger constraints, such as `email` and `url`.

```html:preview
<form class="input-validation-type">
  <ld-input type="email" label="Email" placeholder="you@example.com" required></ld-input>
  <br />
  <ld-input type="url" label="URL" placeholder="https://example.com/" required></ld-input>
  <br />
  <ld-button type="submit" variant="primary">Submit</ld-button>
  <ld-button type="reset" variant="default">Reset</ld-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-type');

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('ld-button'),
    customElements.whenDefined('ld-input')
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

```jsx:react
import { LdButton, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <LdInput type="email" label="Email" placeholder="you@example.com" required />
      <br />
      <LdInput type="url" label="URL" placeholder="https://example.com/" required />
      <br />
      <LdButton type="submit" variant="primary">
        Submit
      </LdButton>
    </form>
  );
};
```

### Custom Error Messages

To create a custom validation error, pass a non-empty string to the `setCustomValidity()` method. This will override any existing validation constraints. The form will not be submitted when a custom validity is set and the browser will show a validation error when the containing form is submitted. To make the input valid again, call `setCustomValidity()` again with an empty string.

```html:preview
<form class="input-validation-custom">
  <ld-input label="Type “leonardo”" required></ld-input>
  <br />
  <ld-button type="submit" variant="primary">Submit</ld-button>
  <ld-button type="reset" variant="default">Reset</ld-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-custom');
  const input = form.querySelector('ld-input');

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('ld-button'),
    customElements.whenDefined('ld-input')
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });

    input.addEventListener('ld-input', () => {
      if (input.value === 'leonardo') {
        input.setCustomValidity('');
      } else {
        input.setCustomValidity("Hey, you're supposed to type 'leonardo' before submitting this!");
      }
    });
  });
</script>
```

```jsx:react
import { useRef, useState } from 'react';
import { LdButton, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const input = useRef(null);
  const [value, setValue] = useState('');

  function handleInput(event) {
    setValue(event.target.value);

    if (event.target.value === 'leonardo') {
      input.current.setCustomValidity('');
    } else {
      input.current.setCustomValidity("Hey, you're supposed to type 'leonardo' before submitting this!");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <LdInput ref={input} label="Type 'leonardo'" required value={value} onLdInput={handleInput} />
      <br />
      <LdButton type="submit" variant="primary">
        Submit
      </LdButton>
    </form>
  );
};
```

:::tip
Custom validation can be applied to any form control that supports the `setCustomValidity()` method. It is not limited to inputs and textareas.
:::

## Custom Validation Styles

Due to the many ways form controls are used, Leonardo doesn't provide out of the box validation styles for form controls as part of its default theme. Instead, the following attributes will be applied to reflect a control's validity as users interact with it. You can use them to create custom styles for any of the validation states you're interested in.

- `data-required` - the form control is required
- `data-optional` - the form control is optional
- `data-invalid` - the form control is currently invalid
- `data-valid` - the form control is currently valid
- `data-user-invalid` - the form control is currently invalid and the user has interacted with it
- `data-user-valid` - the form control is currently valid and the user has interacted with it

These attributes map to the browser's built-in pseudo classes for validation: [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required), [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional), [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid), [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid), and the proposed [`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid) and [`:user-valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid).

:::tip
In the future, data attributes will be replaced with custom pseudo classes such as `:--valid` and `:--invalid`. Leonardo is using data attributes as a workaround until browsers support custom states through [`ElementInternals.states`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/states).
:::

### Styling Invalid Form Controls

You can target validity using any of the aforementioned data attributes, but it's usually preferable to target `data-user-invalid` and `data-user-valid` since they get applied only after a user interaction such as typing or submitting. This prevents empty form controls from appearing invalid immediately, which often results in a poor user experience.

This example demonstrates custom validation styles using `data-user-invalid` and `data-user-valid`. Try Typing in the fields to see how validity changes with user input.

```html:preview
<form class="validity-styles">
  <ld-input
    name="name"
    label="Name"
    help-text="What would you like people to call you?"
    autocomplete="off"
    required
  ></ld-input>

  <ld-select name="animal" label="Favorite Animal" help-text="Select the best option." clearable required>
    <ld-option value="birds">Birds</ld-option>
    <ld-option value="cats">Cats</ld-option>
    <ld-option value="dogs">Dogs</ld-option>
    <ld-option value="other">Other</ld-option>
  </ld-select>

  <ld-checkbox value="accept" required>Accept terms and conditions</ld-checkbox>

  <ld-button type="submit" variant="primary">Submit</ld-button>
  <ld-button type="reset" variant="default">Reset</ld-button>
</form>

<script type="module">
  const form = document.querySelector('.validity-styles');

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('ld-button'),
    customElements.whenDefined('ld-checkbox'),
    customElements.whenDefined('ld-input'),
    customElements.whenDefined('ld-option'),
    customElements.whenDefined('ld-select')
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>

<style>
  .validity-styles ld-input,
  .validity-styles ld-select,
  .validity-styles ld-checkbox {
    display: block;
    margin-bottom: var(--ld-spacing-medium);
  }

  /* user invalid styles */
  .validity-styles ld-input[data-user-invalid]::part(base),
  .validity-styles ld-select[data-user-invalid]::part(combobox),
  .validity-styles ld-checkbox[data-user-invalid]::part(control) {
    border-color: var(--ld-color-danger-600);
  }

  .validity-styles [data-user-invalid]::part(form-control-label),
  .validity-styles [data-user-invalid]::part(form-control-help-text),
  .validity-styles ld-checkbox[data-user-invalid]::part(label) {
    color: var(--ld-color-danger-700);
  }

  .validity-styles ld-checkbox[data-user-invalid]::part(control) {
    outline: none;
  }

  .validity-styles ld-input:focus-within[data-user-invalid]::part(base),
  .validity-styles ld-select:focus-within[data-user-invalid]::part(combobox),
  .validity-styles ld-checkbox:focus-within[data-user-invalid]::part(control) {
    border-color: var(--ld-color-danger-600);
    box-shadow: 0 0 0 var(--ld-focus-ring-width) var(--ld-color-danger-300);
  }

  /* User valid styles */
  .validity-styles ld-input[data-user-valid]::part(base),
  .validity-styles ld-select[data-user-valid]::part(combobox),
  .validity-styles ld-checkbox[data-user-valid]::part(control) {
    border-color: var(--ld-color-success-600);
  }

  .validity-styles [data-user-valid]::part(form-control-label),
  .validity-styles [data-user-valid]::part(form-control-help-text),
  .validity-styles ld-checkbox[data-user-valid]::part(label) {
    color: var(--ld-color-success-700);
  }

  .validity-styles ld-checkbox[data-user-valid]::part(control) {
    background-color: var(--ld-color-success-600);
    outline: none;
  }

  .validity-styles ld-input:focus-within[data-user-valid]::part(base),
  .validity-styles ld-select:focus-within[data-user-valid]::part(combobox),
  .validity-styles ld-checkbox:focus-within[data-user-valid]::part(control) {
    border-color: var(--ld-color-success-600);
    box-shadow: 0 0 0 var(--ld-focus-ring-width) var(--ld-color-success-300);
  }
</style>
```

## Inline Form Validation

By default, Leonardo form controls use the browser's tooltip-style error messages. No mechanism is provided to show errors inline, as there are too many opinions on how that would work when combined with native form controls and other custom elements. You can, however, implement your own solution using the following technique.

To disable the browser's error messages, you need to cancel the `ld-invalid` event. Then you can apply your own inline validation errors. This example demonstrates a primitive way to do this.

```html:preview
<form class="inline-validation">
  <ld-input
    name="name"
    label="Name"
    help-text="What would you like people to call you?"
    autocomplete="off"
    required
  ></ld-input>

  <div id="name-error" aria-live="polite" hidden></div>

  <ld-button type="submit" variant="primary">Submit</ld-button>
  <ld-button type="reset" variant="default">Reset</ld-button>
</form>

<script>
  const form = document.querySelector('.inline-validation');
  const nameError = document.querySelector('#name-error');

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('ld-button'),
    customElements.whenDefined('ld-input')
  ]).then(() => {
    // A form control is invalid
    form.addEventListener(
      'ld-invalid',
      event => {
        // Suppress the browser's constraint validation message
        event.preventDefault();

        nameError.textContent = `Error: ${event.target.validationMessage}`;
        nameError.hidden = false;

        event.target.focus();
      },
      { capture: true } // you must use capture since ld-invalid doesn't bubble!
    );

    // Handle form submit
    form.addEventListener('submit', event => {
      event.preventDefault();
      nameError.hidden = true;
      nameError.textContent = '';
      setTimeout(() => alert('All fields are valid'), 50);
    });

    // Handle form reset
    form.addEventListener('reset', event => {
      nameError.hidden = true;
      nameError.textContent = '';
    });
  });
</script>

<style>
  #name-error {
    font-size: var(--ld-input-help-text-font-size-medium);
    color: var(--ld-color-danger-700);
  }

  #name-error ~ ld-button {
    margin-top: var(--ld-spacing-medium);
  }

  .inline-validation ld-input {
    display: block;
  }

  /* user invalid styles */
  .inline-validation ld-input[data-user-invalid]::part(base) {
    border-color: var(--ld-color-danger-600);
  }

  .inline-validation [data-user-invalid]::part(form-control-label),
  .inline-validation [data-user-invalid]::part(form-control-help-text) {
    color: var(--ld-color-danger-700);
  }

  .inline-validation ld-input:focus-within[data-user-invalid]::part(base) {
    border-color: var(--ld-color-danger-600);
    box-shadow: 0 0 0 var(--ld-focus-ring-width) var(--ld-color-danger-300);
  }

  /* User valid styles */
  .inline-validation ld-input[data-user-valid]::part(base) {
    border-color: var(--ld-color-success-600);
  }

  .inline-validation [data-user-valid]::part(form-control-label),
  .inline-validation [data-user-valid]::part(form-control-help-text) {
    color: var(--ld-color-success-700);
  }

  .inline-validation ld-input:focus-within[data-user-valid]::part(base) {
    border-color: var(--ld-color-success-600);
    box-shadow: 0 0 0 var(--ld-focus-ring-width) var(--ld-color-success-300);
  }
</style>
```

:::warning
This example is meant to demonstrate the concept of providing your own error messages inline. It is not intended to scale to more complex forms. Users who want this functionality are encouraged to build a more appropriate validation solution using the techniques shown below. Depending on how you implement this feature, custom error messages may affect the accessibility of your form controls.
:::

## Getting Associated Form Controls

At this time, using [`HTMLFormElement.elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) will not return Leonardo form controls because the browser is unaware of their status as custom element form controls. Fortunately, Leonardo provides an `elements()` function that does something very similar. However, instead of returning an [`HTMLFormControlsCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection), it returns an array of HTML and Leonardo form controls in the order they appear in the DOM.

```js
import { getFormControls } from '@shoelace-style/leonardo/dist/utilities/form.js';

const form = document.querySelector('#my-form');
const formControls = getFormControls(form);

console.log(formControls); // e.g. [input, ld-input, ...]
```

:::tip
You probably don't need this function! If you're gathering form data for submission, you probably want to use [Data Serialization](#data-serializing) instead.
:::
