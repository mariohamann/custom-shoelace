---
meta:
  title: Option
  description: Options define the selectable items within various form controls such as select.
layout: component
---

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
  <LdSelect>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2">Option 2</LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

## Examples

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html:preview
<ld-select label="Select one">
  <ld-option value="option-1">Option 1</ld-option>
  <ld-option value="option-2" disabled>Option 2</ld-option>
  <ld-option value="option-3">Option 3</ld-option>
</ld-select>
```

```jsx:react
import { LdOption, LdSelect } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSelect>
    <LdOption value="option-1">Option 1</LdOption>
    <LdOption value="option-2" disabled>
      Option 2
    </LdOption>
    <LdOption value="option-3">Option 3</LdOption>
  </LdSelect>
);
```

### Prefix & Suffix

Add icons to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<ld-select label="Select one">
  <ld-option value="option-1">
    <ld-icon slot="prefix" name="envelope"></ld-icon>
    Email
    <ld-icon slot="suffix" name="patch-check"></ld-icon>
  </ld-option>

  <ld-option value="option-2">
    <ld-icon slot="prefix" name="telephone"></ld-icon>
    Phone
    <ld-icon slot="suffix" name="patch-check"></ld-icon>
  </ld-option>

  <ld-option value="option-3">
    <ld-icon slot="prefix" name="chat-dots"></ld-icon>
    Chat
    <ld-icon slot="suffix" name="patch-check"></ld-icon>
  </ld-option>
</ld-select>
```
