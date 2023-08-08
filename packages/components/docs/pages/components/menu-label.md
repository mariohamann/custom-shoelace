---
meta:
  title: Menu Label
  description: Menu labels are used to describe a group of menu items.
layout: component
---

```html:preview
<ld-menu style="max-width: 200px;">
  <ld-menu-label>Fruits</ld-menu-label>
  <ld-menu-item value="apple">Apple</ld-menu-item>
  <ld-menu-item value="banana">Banana</ld-menu-item>
  <ld-menu-item value="orange">Orange</ld-menu-item>
  <ld-divider></ld-divider>
  <ld-menu-label>Vegetables</ld-menu-label>
  <ld-menu-item value="broccoli">Broccoli</ld-menu-item>
  <ld-menu-item value="carrot">Carrot</ld-menu-item>
  <ld-menu-item value="zucchini">Zucchini</ld-menu-item>
</ld-menu>
```

{% raw %}

```jsx:react
import { LdDivider, LdMenu, LdMenuLabel, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdMenu style={{ maxWidth: '200px' }}>
    <LdMenuLabel>Fruits</LdMenuLabel>
    <LdMenuItem value="apple">Apple</LdMenuItem>
    <LdMenuItem value="banana">Banana</LdMenuItem>
    <LdMenuItem value="orange">Orange</LdMenuItem>
    <LdDivider />
    <LdMenuLabel>Vegetables</LdMenuLabel>
    <LdMenuItem value="broccoli">Broccoli</LdMenuItem>
    <LdMenuItem value="carrot">Carrot</LdMenuItem>
    <LdMenuItem value="zucchini">Zucchini</LdMenuItem>
  </LdMenu>
);
```

{% endraw %}
