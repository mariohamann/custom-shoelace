---
meta:
  title: Divider
  description: Dividers are used to visually separate or group elements.
layout: component
---

```html:preview
<ld-divider></ld-divider>
```

```jsx:react
import { LdDivider } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html:preview
<ld-divider style="--width: 4px;"></ld-divider>
```

{% raw %}

```jsx:react
import { LdDivider } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdDivider style={{ '--width': '4px' }} />;
```

{% endraw %}

### Color

Use the `--color` custom property to change the color of the divider.

```html:preview
<ld-divider style="--color: tomato;"></ld-divider>
```

{% raw %}

```jsx:react
import { LdDivider } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdDivider style={{ '--color': 'tomato' }} />;
```

{% endraw %}

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html:preview
<div style="text-align: center;">
  Above
  <ld-divider style="--spacing: 2rem;"></ld-divider>
  Below
</div>
```

{% raw %}

```jsx:react
import { LdDivider } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    Above
    <LdDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html:preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <ld-divider vertical></ld-divider>
  Middle
  <ld-divider vertical></ld-divider>
  Last
</div>
```

{% raw %}

```jsx:react
import { LdDivider } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <LdDivider vertical />
    Middle
    <LdDivider vertical />
    Last
  </div>
);
```

{% endraw %}

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html:preview
<ld-menu style="max-width: 200px;">
  <ld-menu-item value="1">Option 1</ld-menu-item>
  <ld-menu-item value="2">Option 2</ld-menu-item>
  <ld-menu-item value="3">Option 3</ld-menu-item>
  <ld-divider></ld-divider>
  <ld-menu-item value="4">Option 4</ld-menu-item>
  <ld-menu-item value="5">Option 5</ld-menu-item>
  <ld-menu-item value="6">Option 6</ld-menu-item>
</ld-menu>
```

{% raw %}

```jsx:react
import { LdDivider, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdMenu style={{ maxWidth: '200px' }}>
    <LdMenuItem value="1">Option 1</LdMenuItem>
    <LdMenuItem value="2">Option 2</LdMenuItem>
    <LdMenuItem value="3">Option 3</LdMenuItem>
    <ld-divider />
    <LdMenuItem value="4">Option 4</LdMenuItem>
    <LdMenuItem value="5">Option 5</LdMenuItem>
    <LdMenuItem value="6">Option 6</LdMenuItem>
  </LdMenu>
);
```

{% endraw %}
