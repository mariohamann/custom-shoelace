---
meta:
  title: Menu Item
  description: Menu items provide options for the user to pick from in a menu.
layout: component
---

```html:preview
<ld-menu style="max-width: 200px;">
  <ld-menu-item>Option 1</ld-menu-item>
  <ld-menu-item>Option 2</ld-menu-item>
  <ld-menu-item>Option 3</ld-menu-item>
  <ld-divider></ld-divider>
  <ld-menu-item type="checkbox" checked>Checkbox</ld-menu-item>
  <ld-menu-item disabled>Disabled</ld-menu-item>
  <ld-divider></ld-divider>
  <ld-menu-item>
    Prefix Icon
    <ld-icon slot="prefix" name="gift"></ld-icon>
  </ld-menu-item>
  <ld-menu-item>
    Suffix Icon
    <ld-icon slot="suffix" name="heart"></ld-icon>
  </ld-menu-item>
</ld-menu>
```

{% raw %}

```jsx:react
import { LdDivider, LdIcon, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdMenu style={{ maxWidth: '200px' }}>
    <LdMenuItem>Option 1</LdMenuItem>
    <LdMenuItem>Option 2</LdMenuItem>
    <LdMenuItem>Option 3</LdMenuItem>
    <LdDivider />
    <LdMenuItem type="checkbox" checked>
      Checkbox
    </LdMenuItem>
    <LdMenuItem disabled>Disabled</LdMenuItem>
    <LdDivider />
    <LdMenuItem>
      Prefix Icon
      <LdIcon slot="prefix" name="gift" />
    </LdMenuItem>
    <LdMenuItem>
      Suffix Icon
      <LdIcon slot="suffix" name="heart" />
    </LdMenuItem>
  </LdMenu>
);
```

{% endraw %}

## Examples

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html:preview
<ld-menu style="max-width: 200px;">
  <ld-menu-item>Option 1</ld-menu-item>
  <ld-menu-item disabled>Option 2</ld-menu-item>
  <ld-menu-item>Option 3</ld-menu-item>
</ld-menu>
```

{% raw %}

```jsx:react
import { LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdMenu style={{ maxWidth: '200px' }}>
    <LdMenuItem>Option 1</LdMenuItem>
    <LdMenuItem disabled>Option 2</LdMenuItem>
    <LdMenuItem>Option 3</LdMenuItem>
  </LdMenu>
);
```

{% endraw %}

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<ld-menu style="max-width: 200px;">
  <ld-menu-item>
    <ld-icon slot="prefix" name="house"></ld-icon>
    Home
  </ld-menu-item>

  <ld-menu-item>
    <ld-icon slot="prefix" name="envelope"></ld-icon>
    Messages
    <ld-badge slot="suffix" variant="primary" pill>12</ld-badge>
  </ld-menu-item>

  <ld-divider></ld-divider>

  <ld-menu-item>
    <ld-icon slot="prefix" name="gear"></ld-icon>
    Settings
  </ld-menu-item>
</ld-menu>
```

{% raw %}

```jsx:react
import { LdBadge, LdDivider, LdIcon, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdMenu style={{ maxWidth: '200px' }}>
    <LdMenuItem>
      <LdIcon slot="prefix" name="house" />
      Home
    </LdMenuItem>

    <LdMenuItem>
      <LdIcon slot="prefix" name="envelope" />
      Messages
      <LdBadge slot="suffix" variant="primary" pill>
        12
      </LdBadge>
    </LdMenuItem>

    <LdDivider />

    <LdMenuItem>
      <LdIcon slot="prefix" name="gear" />
      Settings
    </LdMenuItem>
  </LdMenu>
);
```

{% endraw %}

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html:preview
<ld-menu style="max-width: 200px;">
  <ld-menu-item type="checkbox">Autosave</ld-menu-item>
  <ld-menu-item type="checkbox" checked>Check Spelling</ld-menu-item>
  <ld-menu-item type="checkbox">Word Wrap</ld-menu-item>
</ld-menu>
```

{% raw %}

```jsx:react
import { LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdMenu style={{ maxWidth: '200px' }}>
    <LdMenuItem type="checkbox">Autosave</LdMenuItem>
    <LdMenuItem type="checkbox" checked>
      Check Spelling
    </LdMenuItem>
    <LdMenuItem type="checkbox">Word Wrap</LdMenuItem>
  </LdMenu>
);
```

{% endraw %}

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `ld-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html:preview
<ld-menu class="menu-value" style="max-width: 200px;">
  <ld-menu-item value="opt-1">Option 1</ld-menu-item>
  <ld-menu-item value="opt-2">Option 2</ld-menu-item>
  <ld-menu-item value="opt-3">Option 3</ld-menu-item>
  <ld-divider></ld-divider>
  <ld-menu-item type="checkbox" value="opt-4">Checkbox 4</ld-menu-item>
  <ld-menu-item type="checkbox" value="opt-5">Checkbox 5</ld-menu-item>
  <ld-menu-item type="checkbox" value="opt-6">Checkbox 6</ld-menu-item>
</ld-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('ld-select', event => {
    const item = event.detail.item;

    // Log value
    if (item.type === 'checkbox') {
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

{% raw %}

```jsx:react
import { LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <LdMenu style={{ maxWidth: '200px' }} onLdSelect={handleSelect}>
      <LdMenuItem value="opt-1">Option 1</LdMenuItem>
      <LdMenuItem value="opt-2">Option 2</LdMenuItem>
      <LdMenuItem value="opt-3">Option 3</LdMenuItem>
    </LdMenu>
  );
};
```

{% endraw %}
