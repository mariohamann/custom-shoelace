---
meta:
  title: Menu
  description: Menus provide a list of options for the user to choose from.
layout: component
---

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html:preview
<ld-menu style="max-width: 200px;">
  <ld-menu-item value="undo">Undo</ld-menu-item>
  <ld-menu-item value="redo">Redo</ld-menu-item>
  <ld-divider></ld-divider>
  <ld-menu-item value="cut">Cut</ld-menu-item>
  <ld-menu-item value="copy">Copy</ld-menu-item>
  <ld-menu-item value="paste">Paste</ld-menu-item>
  <ld-menu-item value="delete">Delete</ld-menu-item>
</ld-menu>
```

{% raw %}

```jsx:react
import { LdDivider, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdMenu style={{ maxWidth: '200px' }}>
    <LdMenuItem value="undo">Undo</LdMenuItem>
    <LdMenuItem value="redo">Redo</LdMenuItem>
    <LdDivider />
    <LdMenuItem value="cut">Cut</LdMenuItem>
    <LdMenuItem value="copy">Copy</LdMenuItem>
    <LdMenuItem value="paste">Paste</LdMenuItem>
    <LdMenuItem value="delete">Delete</LdMenuItem>
  </LdMenu>
);
```

{% endraw %}

:::tip
Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.
:::
