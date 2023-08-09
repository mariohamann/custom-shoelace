---
meta:
  title: Textarea
  description: Textareas collect data from the user and allow multiple lines of text.
layout: component
---

```html:preview
<ld-textarea></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<ld-textarea label="Comments"></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<ld-textarea label="Feedback" help-text="Please tell us what you think."> </ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html:preview
<ld-textarea rows="2"></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<ld-textarea placeholder="Type something"></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html:preview
<ld-textarea placeholder="Type something" filled></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html:preview
<ld-textarea placeholder="Textarea" disabled></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html:preview
<ld-textarea placeholder="Small" size="small"></ld-textarea>
<br />
<ld-textarea placeholder="Medium" size="medium"></ld-textarea>
<br />
<ld-textarea placeholder="Large" size="large"></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdTextarea placeholder="Small" size="small"></LdTextarea>
    <br />
    <LdTextarea placeholder="Medium" size="medium"></LdTextarea>
    <br />
    <LdTextarea placeholder="Large" size="large"></LdTextarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html:preview
<ld-textarea resize="none"></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html:preview
<ld-textarea resize="auto"></ld-textarea>
```

```jsx:react
import { LdTextarea } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdTextarea resize="auto" />;
```
