---
meta:
  title: Button
  description: Buttons represent actions that are available to the user.
layout: component
---

```html:preview
<ld-button>Button</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdButton>Button</LdButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html:preview
<ld-button variant="default">Default</ld-button>
<ld-button variant="primary">Primary</ld-button>
<ld-button variant="success">Success</ld-button>
<ld-button variant="neutral">Neutral</ld-button>
<ld-button variant="warning">Warning</ld-button>
<ld-button variant="danger">Danger</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton variant="default">Default</LdButton>
    <LdButton variant="primary">Primary</LdButton>
    <LdButton variant="success">Success</LdButton>
    <LdButton variant="neutral">Neutral</LdButton>
    <LdButton variant="warning">Warning</LdButton>
    <LdButton variant="danger">Danger</LdButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html:preview
<ld-button size="small">Small</ld-button>
<ld-button size="medium">Medium</ld-button>
<ld-button size="large">Large</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton size="small">Small</LdButton>
    <LdButton size="medium">Medium</LdButton>
    <LdButton size="large">Large</LdButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html:preview
<ld-button variant="default" outline>Default</ld-button>
<ld-button variant="primary" outline>Primary</ld-button>
<ld-button variant="success" outline>Success</ld-button>
<ld-button variant="neutral" outline>Neutral</ld-button>
<ld-button variant="warning" outline>Warning</ld-button>
<ld-button variant="danger" outline>Danger</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton variant="default" outline>
      Default
    </LdButton>
    <LdButton variant="primary" outline>
      Primary
    </LdButton>
    <LdButton variant="success" outline>
      Success
    </LdButton>
    <LdButton variant="neutral" outline>
      Neutral
    </LdButton>
    <LdButton variant="warning" outline>
      Warning
    </LdButton>
    <LdButton variant="danger" outline>
      Danger
    </LdButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html:preview
<ld-button size="small" pill>Small</ld-button>
<ld-button size="medium" pill>Medium</ld-button>
<ld-button size="large" pill>Large</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton size="small" pill>
      Small
    </LdButton>
    <LdButton size="medium" pill>
      Medium
    </LdButton>
    <LdButton size="large" pill>
      Large
    </LdButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<ld-icon>` in the default slot.

```html:preview
<ld-button variant="default" size="small" circle>
  <ld-icon name="gear" label="Settings"></ld-icon>
</ld-button>

<ld-button variant="default" size="medium" circle>
  <ld-icon name="gear" label="Settings"></ld-icon>
</ld-button>

<ld-button variant="default" size="large" circle>
  <ld-icon name="gear" label="Settings"></ld-icon>
</ld-button>
```

```jsx:react
import { LdButton, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton variant="default" size="small" circle>
      <LdIcon name="gear" />
    </LdButton>
    <LdButton variant="default" size="medium" circle>
      <LdIcon name="gear" />
    </LdButton>
    <LdButton variant="default" size="large" circle>
      <LdIcon name="gear" />
    </LdButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html:preview
<ld-button variant="text" size="small">Text</ld-button>
<ld-button variant="text" size="medium">Text</ld-button>
<ld-button variant="text" size="large">Text</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton variant="text" size="small">
      Text
    </LdButton>
    <LdButton variant="text" size="medium">
      Text
    </LdButton>
    <LdButton variant="text" size="large">
      Text
    </LdButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes.

```html:preview
<ld-button href="https://example.com/">Link</ld-button>
<ld-button href="https://example.com/" target="_blank">New Window</ld-button>
<ld-button href="/assets/images/wordmark.svg" download="leonardo.svg">Download</ld-button>
<ld-button href="https://example.com/" disabled>Disabled</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton href="https://example.com/">Link</LdButton>
    <LdButton href="https://example.com/" target="_blank">
      New Window
    </LdButton>
    <LdButton href="/assets/images/wordmark.svg" download="leonardo.svg">
      Download
    </LdButton>
    <LdButton href="https://example.com/" disabled>
      Disabled
    </LdButton>
  </>
);
```

:::tip
When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).
:::

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html:preview
<ld-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</ld-button>
<ld-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</ld-button>
<ld-button variant="default" size="large" style="width: 100%;">Large</ld-button>
```

{% raw %}

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </LdButton>
    <LdButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </LdButton>
    <LdButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </LdButton>
  </>
);
```

{% endraw %}

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<ld-button variant="default" size="small">
  <ld-icon slot="prefix" name="gear"></ld-icon>
  Settings
</ld-button>

<ld-button variant="default" size="small">
  <ld-icon slot="suffix" name="arrow-counterclockwise"></ld-icon>
  Refresh
</ld-button>

<ld-button variant="default" size="small">
  <ld-icon slot="prefix" name="link-45deg"></ld-icon>
  <ld-icon slot="suffix" name="box-arrow-up-right"></ld-icon>
  Open
</ld-button>

<br /><br />

<ld-button variant="default">
  <ld-icon slot="prefix" name="gear"></ld-icon>
  Settings
</ld-button>

<ld-button variant="default">
  <ld-icon slot="suffix" name="arrow-counterclockwise"></ld-icon>
  Refresh
</ld-button>

<ld-button variant="default">
  <ld-icon slot="prefix" name="link-45deg"></ld-icon>
  <ld-icon slot="suffix" name="box-arrow-up-right"></ld-icon>
  Open
</ld-button>

<br /><br />

<ld-button variant="default" size="large">
  <ld-icon slot="prefix" name="gear"></ld-icon>
  Settings
</ld-button>

<ld-button variant="default" size="large">
  <ld-icon slot="suffix" name="arrow-counterclockwise"></ld-icon>
  Refresh
</ld-button>

<ld-button variant="default" size="large">
  <ld-icon slot="prefix" name="link-45deg"></ld-icon>
  <ld-icon slot="suffix" name="box-arrow-up-right"></ld-icon>
  Open
</ld-button>
```

```jsx:react
import { LdButton, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton variant="default" size="small">
      <LdIcon slot="prefix" name="gear"></LdIcon>
      Settings
    </LdButton>

    <LdButton variant="default" size="small">
      <LdIcon slot="suffix" name="arrow-counterclockwise"></LdIcon>
      Refresh
    </LdButton>

    <LdButton variant="default" size="small">
      <LdIcon slot="prefix" name="link-45deg"></LdIcon>
      <LdIcon slot="suffix" name="box-arrow-up-right"></LdIcon>
      Open
    </LdButton>

    <br />
    <br />

    <LdButton variant="default">
      <LdIcon slot="prefix" name="gear"></LdIcon>
      Settings
    </LdButton>

    <LdButton variant="default">
      <LdIcon slot="suffix" name="arrow-counterclockwise"></LdIcon>
      Refresh
    </LdButton>

    <LdButton variant="default">
      <LdIcon slot="prefix" name="link-45deg"></LdIcon>
      <LdIcon slot="suffix" name="box-arrow-up-right"></LdIcon>
      Open
    </LdButton>

    <br />
    <br />

    <LdButton variant="default" size="large">
      <LdIcon slot="prefix" name="gear"></LdIcon>
      Settings
    </LdButton>

    <LdButton variant="default" size="large">
      <LdIcon slot="suffix" name="arrow-counterclockwise"></LdIcon>
      Refresh
    </LdButton>

    <LdButton variant="default" size="large">
      <LdIcon slot="prefix" name="link-45deg"></LdIcon>
      <LdIcon slot="suffix" name="box-arrow-up-right"></LdIcon>
      Open
    </LdButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html:preview
<ld-button size="small" caret>Small</ld-button>
<ld-button size="medium" caret>Medium</ld-button>
<ld-button size="large" caret>Large</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton size="small" caret>
      Small
    </LdButton>
    <LdButton size="medium" caret>
      Medium
    </LdButton>
    <LdButton size="large" caret>
      Large
    </LdButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html:preview
<ld-button variant="default" loading>Default</ld-button>
<ld-button variant="primary" loading>Primary</ld-button>
<ld-button variant="success" loading>Success</ld-button>
<ld-button variant="neutral" loading>Neutral</ld-button>
<ld-button variant="warning" loading>Warning</ld-button>
<ld-button variant="danger" loading>Danger</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton variant="default" loading>
      Default
    </LdButton>
    <LdButton variant="primary" loading>
      Primary
    </LdButton>
    <LdButton variant="success" loading>
      Success
    </LdButton>
    <LdButton variant="neutral" loading>
      Neutral
    </LdButton>
    <LdButton variant="warning" loading>
      Warning
    </LdButton>
    <LdButton variant="danger" loading>
      Danger
    </LdButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button.

```html:preview
<ld-button variant="default" disabled>Default</ld-button>
<ld-button variant="primary" disabled>Primary</ld-button>
<ld-button variant="success" disabled>Success</ld-button>
<ld-button variant="neutral" disabled>Neutral</ld-button>
<ld-button variant="warning" disabled>Warning</ld-button>
<ld-button variant="danger" disabled>Danger</ld-button>
```

```jsx:react
import { LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton variant="default" disabled>
      Default
    </LdButton>

    <LdButton variant="primary" disabled>
      Primary
    </LdButton>

    <LdButton variant="success" disabled>
      Success
    </LdButton>

    <LdButton variant="neutral" disabled>
      Neutral
    </LdButton>

    <LdButton variant="warning" disabled>
      Warning
    </LdButton>

    <LdButton variant="danger" disabled>
      Danger
    </LdButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `ld-button[variant="primary"]`).

```html:preview
<ld-button class="pink">Pink Button</ld-button>

<style>
  ld-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --ld-input-height-medium: 48px;
    --ld-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--ld-transition-medium) transform ease, var(--ld-transition-medium) border ease;
  }

  ld-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  ld-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  ld-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```
