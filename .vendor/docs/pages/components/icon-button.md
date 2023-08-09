---
meta:
  title: Icon Button
  description: Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
layout: component
---

For a full list of icons that come bundled with Leonardo, refer to the [icon component](/components/icon).

```html:preview
<ld-icon-button name="gear" label="Settings"></ld-icon-button>
```

```jsx:react
import { LdIconButton } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html:preview
<ld-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></ld-icon-button>
<ld-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></ld-icon-button>
<ld-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></ld-icon-button>
```

{% raw %}

```jsx:react
import { LdIconButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <LdIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <LdIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

{% endraw %}

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html:preview
<div class="icon-button-color">
  <ld-icon-button name="type-bold" label="Bold"></ld-icon-button>
  <ld-icon-button name="type-italic" label="Italic"></ld-icon-button>
  <ld-icon-button name="type-underline" label="Underline"></ld-icon-button>
</div>

<style>
  .icon-button-color ld-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color ld-icon-button::part(base):hover,
  .icon-button-color ld-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color ld-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx:react
import { LdIconButton } from '@shoelace-style/leonardo/dist/react';

const css = `
  .icon-button-color ld-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color ld-icon-button::part(base):hover,
  .icon-button-color ld-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color ld-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <LdIconButton name="type-bold" label="Bold" />
      <LdIconButton name="type-italic" label="Italic" />
      <LdIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html:preview
<ld-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></ld-icon-button>
```

```jsx:react
import { LdIconButton } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html:preview
<ld-tooltip content="Settings">
  <ld-icon-button name="gear" label="Settings"></ld-icon-button>
</ld-tooltip>
```

```jsx:react
import { LdIconButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTooltip content="Settings">
    <LdIconButton name="gear" label="Settings" />
  </LdTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html:preview
<ld-icon-button name="gear" label="Settings" disabled></ld-icon-button>
```

```jsx:react
import { LdIconButton } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdIconButton name="gear" label="Settings" disabled />;
```
