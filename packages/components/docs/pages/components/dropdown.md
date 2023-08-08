---
meta:
  title: Dropdown
  description: 'Dropdowns expose additional content that "drops down" in a panel.'
layout: component
---

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker)). The API gives you complete control over showing, hiding, and positioning the panel.

```html:preview
<ld-dropdown>
  <ld-button slot="trigger" caret>Dropdown</ld-button>
  <ld-menu>
    <ld-menu-item>Dropdown Item 1</ld-menu-item>
    <ld-menu-item>Dropdown Item 2</ld-menu-item>
    <ld-menu-item>Dropdown Item 3</ld-menu-item>
    <ld-divider></ld-divider>
    <ld-menu-item type="checkbox" checked>Checkbox</ld-menu-item>
    <ld-menu-item disabled>Disabled</ld-menu-item>
    <ld-divider></ld-divider>
    <ld-menu-item>
      Prefix
      <ld-icon slot="prefix" name="gift"></ld-icon>
    </ld-menu-item>
    <ld-menu-item>
      Suffix Icon
      <ld-icon slot="suffix" name="heart"></ld-icon>
    </ld-menu-item>
  </ld-menu>
</ld-dropdown>
```

```jsx:react
import { LdButton, LdDivider, LdDropdown, LdIcon, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdDropdown>
    <LdButton slot="trigger" caret>
      Dropdown
    </LdButton>
    <LdMenu>
      <LdMenuItem>Dropdown Item 1</LdMenuItem>
      <LdMenuItem>Dropdown Item 2</LdMenuItem>
      <LdMenuItem>Dropdown Item 3</LdMenuItem>
      <LdDivider />
      <LdMenuItem type="checkbox" checked>
        Checkbox
      </LdMenuItem>
      <LdMenuItem disabled>Disabled</LdMenuItem>
      <LdDivider />
      <LdMenuItem>
        Prefix
        <LdIcon slot="prefix" name="gift" />
      </LdMenuItem>
      <LdMenuItem>
        Suffix Icon
        <LdIcon slot="suffix" name="heart" />
      </LdMenuItem>
    </LdMenu>
  </LdDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the [`ld-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html:preview
<div class="dropdown-selection">
  <ld-dropdown>
    <ld-button slot="trigger" caret>Edit</ld-button>
    <ld-menu>
      <ld-menu-item value="cut">Cut</ld-menu-item>
      <ld-menu-item value="copy">Copy</ld-menu-item>
      <ld-menu-item value="paste">Paste</ld-menu-item>
    </ld-menu>
  </ld-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('ld-dropdown');

  dropdown.addEventListener('ld-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx:react
import { LdButton, LdDropdown, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <LdDropdown>
      <LdButton slot="trigger" caret>
        Edit
      </LdButton>
      <LdMenu onLdSelect={handleSelect}>
        <LdMenuItem value="cut">Cut</LdMenuItem>
        <LdMenuItem value="copy">Copy</LdMenuItem>
        <LdMenuItem value="paste">Paste</LdMenuItem>
      </LdMenu>
    </LdDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html:preview
<div class="dropdown-selection-alt">
  <ld-dropdown>
    <ld-button slot="trigger" caret>Edit</ld-button>
    <ld-menu>
      <ld-menu-item value="cut">Cut</ld-menu-item>
      <ld-menu-item value="copy">Copy</ld-menu-item>
      <ld-menu-item value="paste">Paste</ld-menu-item>
    </ld-menu>
  </ld-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('ld-menu-item[value="cut"]');
  const copy = container.querySelector('ld-menu-item[value="copy"]');
  const paste = container.querySelector('ld-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx:react
import { LdButton, LdDropdown, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <LdDropdown>
      <LdButton slot="trigger" caret>
        Edit
      </LdButton>
      <LdMenu>
        <LdMenuItem onClick={handleCut}>Cut</LdMenuItem>
        <LdMenuItem onClick={handleCopy}>Copy</LdMenuItem>
        <LdMenuItem onClick={handlePaste}>Paste</LdMenuItem>
      </LdMenu>
    </LdDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html:preview
<ld-dropdown placement="top-start">
  <ld-button slot="trigger" caret>Edit</ld-button>
  <ld-menu>
    <ld-menu-item>Cut</ld-menu-item>
    <ld-menu-item>Copy</ld-menu-item>
    <ld-menu-item>Paste</ld-menu-item>
    <ld-divider></ld-divider>
    <ld-menu-item>Find</ld-menu-item>
    <ld-menu-item>Replace</ld-menu-item>
  </ld-menu>
</ld-dropdown>
```

```jsx:react
import { LdButton, LdDivider, LdDropdown, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdDropdown placement="top-start">
    <LdButton slot="trigger" caret>
      Edit
    </LdButton>
    <LdMenu>
      <LdMenuItem>Cut</LdMenuItem>
      <LdMenuItem>Copy</LdMenuItem>
      <LdMenuItem>Paste</LdMenuItem>
      <LdDivider />
      <LdMenuItem>Find</LdMenuItem>
      <LdMenuItem>Replace</LdMenuItem>
    </LdMenu>
  </LdDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html:preview
<ld-dropdown distance="30">
  <ld-button slot="trigger" caret>Edit</ld-button>
  <ld-menu>
    <ld-menu-item>Cut</ld-menu-item>
    <ld-menu-item>Copy</ld-menu-item>
    <ld-menu-item>Paste</ld-menu-item>
    <ld-divider></ld-divider>
    <ld-menu-item>Find</ld-menu-item>
    <ld-menu-item>Replace</ld-menu-item>
  </ld-menu>
</ld-dropdown>
```

```jsx:react
import { LdButton, LdDivider, LdDropdown, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdDropdown distance={30}>
    <LdButton slot="trigger" caret>
      Edit
    </LdButton>
    <LdMenu>
      <LdMenuItem>Cut</LdMenuItem>
      <LdMenuItem>Copy</LdMenuItem>
      <LdMenuItem>Paste</LdMenuItem>
      <LdDivider />
      <LdMenuItem>Find</LdMenuItem>
      <LdMenuItem>Replace</LdMenuItem>
    </LdMenu>
  </LdDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html:preview
<ld-dropdown skidding="30">
  <ld-button slot="trigger" caret>Edit</ld-button>
  <ld-menu>
    <ld-menu-item>Cut</ld-menu-item>
    <ld-menu-item>Copy</ld-menu-item>
    <ld-menu-item>Paste</ld-menu-item>
    <ld-divider></ld-divider>
    <ld-menu-item>Find</ld-menu-item>
    <ld-menu-item>Replace</ld-menu-item>
  </ld-menu>
</ld-dropdown>
```

```jsx:react
import { LdButton, LdDivider, LdDropdown, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdDropdown skidding={30}>
    <LdButton slot="trigger" caret>
      Edit
    </LdButton>
    <LdMenu>
      <LdMenuItem>Cut</LdMenuItem>
      <LdMenuItem>Copy</LdMenuItem>
      <LdMenuItem>Paste</LdMenuItem>
      <LdDivider />
      <LdMenuItem>Find</LdMenuItem>
      <LdMenuItem>Replace</LdMenuItem>
    </LdMenu>
  </LdDropdown>
);
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="dropdown-hoist">
  <ld-dropdown>
    <ld-button slot="trigger" caret>No Hoist</ld-button>
    <ld-menu>
      <ld-menu-item>Item 1</ld-menu-item>
      <ld-menu-item>Item 2</ld-menu-item>
      <ld-menu-item>Item 3</ld-menu-item>
    </ld-menu>
  </ld-dropdown>

  <ld-dropdown hoist>
    <ld-button slot="trigger" caret>Hoist</ld-button>
    <ld-menu>
      <ld-menu-item>Item 1</ld-menu-item>
      <ld-menu-item>Item 2</ld-menu-item>
      <ld-menu-item>Item 3</ld-menu-item>
    </ld-menu>
  </ld-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--ld-panel-border-color);
    padding: var(--ld-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx:react
import { LdButton, LdDivider, LdDropdown, LdIcon, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--ld-panel-border-color);
    padding: var(--ld-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <LdDropdown>
        <LdButton slot="trigger" caret>
          No Hoist
        </LdButton>
        <LdMenu>
          <LdMenuItem>Item 1</LdMenuItem>
          <LdMenuItem>Item 2</LdMenuItem>
          <LdMenuItem>Item 3</LdMenuItem>
        </LdMenu>
      </LdDropdown>

      <LdDropdown hoist>
        <LdButton slot="trigger" caret>
          Hoist
        </LdButton>
        <LdMenu>
          <LdMenuItem>Item 1</LdMenuItem>
          <LdMenuItem>Item 2</LdMenuItem>
          <LdMenuItem>Item 3</LdMenuItem>
        </LdMenu>
      </LdDropdown>
    </div>

    <style>{css}</style>
  </>
);
```
