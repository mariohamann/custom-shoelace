---
meta:
  title: Button Group
  description: Button groups can be used to group related buttons into sections.
layout: component
---

```html:preview
<ld-button-group label="Alignment">
  <ld-button>Left</ld-button>
  <ld-button>Center</ld-button>
  <ld-button>Right</ld-button>
</ld-button-group>
```

```jsx:react
import { LdButton, LdButtonGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdButtonGroup label="Alignment">
    <LdButton>Left</LdButton>
    <LdButton>Center</LdButton>
    <LdButton>Right</LdButton>
  </LdButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html:preview
<ld-button-group label="Alignment">
  <ld-button size="small">Left</ld-button>
  <ld-button size="small">Center</ld-button>
  <ld-button size="small">Right</ld-button>
</ld-button-group>

<br /><br />

<ld-button-group label="Alignment">
  <ld-button size="medium">Left</ld-button>
  <ld-button size="medium">Center</ld-button>
  <ld-button size="medium">Right</ld-button>
</ld-button-group>

<br /><br />

<ld-button-group label="Alignment">
  <ld-button size="large">Left</ld-button>
  <ld-button size="large">Center</ld-button>
  <ld-button size="large">Right</ld-button>
</ld-button-group>
```

```jsx:react
import { LdButton, LdButtonGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButtonGroup label="Alignment">
      <LdButton size="small">Left</LdButton>
      <LdButton size="small">Center</LdButton>
      <LdButton size="small">Right</LdButton>
    </LdButtonGroup>

    <br />
    <br />

    <LdButtonGroup label="Alignment">
      <LdButton size="medium">Left</LdButton>
      <LdButton size="medium">Center</LdButton>
      <LdButton size="medium">Right</LdButton>
    </LdButtonGroup>

    <br />
    <br />

    <LdButtonGroup label="Alignment">
      <LdButton size="large">Left</LdButton>
      <LdButton size="large">Center</LdButton>
      <LdButton size="large">Right</LdButton>
    </LdButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html:preview
<ld-button-group label="Alignment">
  <ld-button variant="primary">Left</ld-button>
  <ld-button variant="primary">Center</ld-button>
  <ld-button variant="primary">Right</ld-button>
</ld-button-group>

<br /><br />

<ld-button-group label="Alignment">
  <ld-button variant="success">Left</ld-button>
  <ld-button variant="success">Center</ld-button>
  <ld-button variant="success">Right</ld-button>
</ld-button-group>

<br /><br />

<ld-button-group label="Alignment">
  <ld-button variant="neutral">Left</ld-button>
  <ld-button variant="neutral">Center</ld-button>
  <ld-button variant="neutral">Right</ld-button>
</ld-button-group>

<br /><br />

<ld-button-group label="Alignment">
  <ld-button variant="warning">Left</ld-button>
  <ld-button variant="warning">Center</ld-button>
  <ld-button variant="warning">Right</ld-button>
</ld-button-group>

<br /><br />

<ld-button-group label="Alignment">
  <ld-button variant="danger">Left</ld-button>
  <ld-button variant="danger">Center</ld-button>
  <ld-button variant="danger">Right</ld-button>
</ld-button-group>
```

```jsx:react
import { LdButton, LdButtonGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButtonGroup label="Alignment">
      <LdButton variant="primary">Left</LdButton>
      <LdButton variant="primary">Center</LdButton>
      <LdButton variant="primary">Right</LdButton>
    </LdButtonGroup>

    <br />
    <br />

    <LdButtonGroup label="Alignment">
      <LdButton variant="success">Left</LdButton>
      <LdButton variant="success">Center</LdButton>
      <LdButton variant="success">Right</LdButton>
    </LdButtonGroup>

    <br />
    <br />

    <LdButtonGroup label="Alignment">
      <LdButton variant="neutral">Left</LdButton>
      <LdButton variant="neutral">Center</LdButton>
      <LdButton variant="neutral">Right</LdButton>
    </LdButtonGroup>

    <br />
    <br />

    <LdButtonGroup label="Alignment">
      <LdButton variant="warning">Left</LdButton>
      <LdButton variant="warning">Center</LdButton>
      <LdButton variant="warning">Right</LdButton>
    </LdButtonGroup>

    <br />
    <br />

    <LdButtonGroup label="Alignment">
      <LdButton variant="danger">Left</LdButton>
      <LdButton variant="danger">Center</LdButton>
      <LdButton variant="danger">Right</LdButton>
    </LdButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html:preview
<ld-button-group label="Alignment">
  <ld-button size="small" pill>Left</ld-button>
  <ld-button size="small" pill>Center</ld-button>
  <ld-button size="small" pill>Right</ld-button>
</ld-button-group>

<br /><br />

<ld-button-group label="Alignment">
  <ld-button size="medium" pill>Left</ld-button>
  <ld-button size="medium" pill>Center</ld-button>
  <ld-button size="medium" pill>Right</ld-button>
</ld-button-group>

<br /><br />

<ld-button-group label="Alignment">
  <ld-button size="large" pill>Left</ld-button>
  <ld-button size="large" pill>Center</ld-button>
  <ld-button size="large" pill>Right</ld-button>
</ld-button-group>
```

```jsx:react
import { LdButton, LdButtonGroup } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButtonGroup label="Alignment">
      <LdButton size="small" pill>
        Left
      </LdButton>
      <LdButton size="small" pill>
        Center
      </LdButton>
      <LdButton size="small" pill>
        Right
      </LdButton>
    </LdButtonGroup>

    <br />
    <br />

    <LdButtonGroup label="Alignment">
      <LdButton size="medium" pill>
        Left
      </LdButton>
      <LdButton size="medium" pill>
        Center
      </LdButton>
      <LdButton size="medium" pill>
        Right
      </LdButton>
    </LdButtonGroup>

    <br />
    <br />

    <LdButtonGroup label="Alignment">
      <LdButton size="large" pill>
        Left
      </LdButton>
      <LdButton size="large" pill>
        Center
      </LdButton>
      <LdButton size="large" pill>
        Right
      </LdButton>
    </LdButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<ld-button>` element.

```html:preview
<ld-button-group label="Example Button Group">
  <ld-button>Button</ld-button>
  <ld-button>Button</ld-button>
  <ld-dropdown>
    <ld-button slot="trigger" caret>Dropdown</ld-button>
    <ld-menu>
      <ld-menu-item>Item 1</ld-menu-item>
      <ld-menu-item>Item 2</ld-menu-item>
      <ld-menu-item>Item 3</ld-menu-item>
    </ld-menu>
  </ld-dropdown>
</ld-button-group>
```

```jsx:react
import { LdButton, LdButtonGroup, LdDropdown, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdButtonGroup label="Example Button Group">
    <LdButton>Button</LdButton>
    <LdButton>Button</LdButton>
    <LdDropdown>
      <LdButton slot="trigger" caret>
        Dropdown
      </LdButton>
      <LdMenu>
        <LdMenuItem>Item 1</LdMenuItem>
        <LdMenuItem>Item 2</LdMenuItem>
        <LdMenuItem>Item 3</LdMenuItem>
      </LdMenu>
    </LdDropdown>
  </LdButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html:preview
<ld-button-group label="Example Button Group">
  <ld-button variant="primary">Save</ld-button>
  <ld-dropdown placement="bottom-end">
    <ld-button slot="trigger" variant="primary" caret>
      <ld-visually-hidden>More options</ld-visually-hidden>
    </ld-button>
    <ld-menu>
      <ld-menu-item>Save</ld-menu-item>
      <ld-menu-item>Save as&hellip;</ld-menu-item>
      <ld-menu-item>Save all</ld-menu-item>
    </ld-menu>
  </ld-dropdown>
</ld-button-group>
```

```jsx:react
import { LdButton, LdButtonGroup, LdDropdown, LdMenu, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdButtonGroup label="Example Button Group">
    <LdButton variant="primary">Save</LdButton>
    <LdDropdown placement="bottom-end">
      <LdButton slot="trigger" variant="primary" caret></LdButton>
      <LdMenu>
        <LdMenuItem>Save</LdMenuItem>
        <LdMenuItem>Save as&hellip;</LdMenuItem>
        <LdMenuItem>Save all</LdMenuItem>
      </LdMenu>
    </LdDropdown>
  </LdButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html:preview
<ld-button-group label="Alignment">
  <ld-tooltip content="I'm on the left">
    <ld-button>Left</ld-button>
  </ld-tooltip>

  <ld-tooltip content="I'm in the middle">
    <ld-button>Center</ld-button>
  </ld-tooltip>

  <ld-tooltip content="I'm on the right">
    <ld-button>Right</ld-button>
  </ld-tooltip>
</ld-button-group>
```

```jsx:react
import { LdButton, LdButtonGroup, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButtonGroup label="Alignment">
      <LdTooltip content="I'm on the left">
        <LdButton>Left</LdButton>
      </LdTooltip>

      <LdTooltip content="I'm in the middle">
        <LdButton>Center</LdButton>
      </LdTooltip>

      <LdTooltip content="I'm on the right">
        <LdButton>Right</LdButton>
      </LdTooltip>
    </LdButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html:preview
<div class="button-group-toolbar">
  <ld-button-group label="History">
    <ld-tooltip content="Undo">
      <ld-button><ld-icon name="arrow-counterclockwise" label="Undo"></ld-icon></ld-button>
    </ld-tooltip>
    <ld-tooltip content="Redo">
      <ld-button><ld-icon name="arrow-clockwise" label="Redo"></ld-icon></ld-button>
    </ld-tooltip>
  </ld-button-group>

  <ld-button-group label="Formatting">
    <ld-tooltip content="Bold">
      <ld-button><ld-icon name="type-bold" label="Bold"></ld-icon></ld-button>
    </ld-tooltip>
    <ld-tooltip content="Italic">
      <ld-button><ld-icon name="type-italic" label="Italic"></ld-icon></ld-button>
    </ld-tooltip>
    <ld-tooltip content="Underline">
      <ld-button><ld-icon name="type-underline" label="Underline"></ld-icon></ld-button>
    </ld-tooltip>
  </ld-button-group>

  <ld-button-group label="Alignment">
    <ld-tooltip content="Align Left">
      <ld-button><ld-icon name="justify-left" label="Align Left"></ld-icon></ld-button>
    </ld-tooltip>
    <ld-tooltip content="Align Center">
      <ld-button><ld-icon name="justify" label="Align Center"></ld-icon></ld-button>
    </ld-tooltip>
    <ld-tooltip content="Align Right">
      <ld-button><ld-icon name="justify-right" label="Align Right"></ld-icon></ld-button>
    </ld-tooltip>
  </ld-button-group>
</div>

<style>
  .button-group-toolbar ld-button-group:not(:last-of-type) {
    margin-right: var(--ld-spacing-x-small);
  }
</style>
```

```jsx:react
import { LdButton, LdButtonGroup, LdIcon, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const css = `
  .button-group-toolbar ld-button-group:not(:last-of-type) {
    margin-right: var(--ld-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <LdButtonGroup label="History">
        <LdTooltip content="Undo">
          <LdButton>
            <LdIcon name="arrow-counterclockwise"></LdIcon>
          </LdButton>
        </LdTooltip>
        <LdTooltip content="Redo">
          <LdButton>
            <LdIcon name="arrow-clockwise"></LdIcon>
          </LdButton>
        </LdTooltip>
      </LdButtonGroup>

      <LdButtonGroup label="Formatting">
        <LdTooltip content="Bold">
          <LdButton>
            <LdIcon name="type-bold"></LdIcon>
          </LdButton>
        </LdTooltip>
        <LdTooltip content="Italic">
          <LdButton>
            <LdIcon name="type-italic"></LdIcon>
          </LdButton>
        </LdTooltip>
        <LdTooltip content="Underline">
          <LdButton>
            <LdIcon name="type-underline"></LdIcon>
          </LdButton>
        </LdTooltip>
      </LdButtonGroup>

      <LdButtonGroup label="Alignment">
        <LdTooltip content="Align Left">
          <LdButton>
            <LdIcon name="justify-left"></LdIcon>
          </LdButton>
        </LdTooltip>
        <LdTooltip content="Align Center">
          <LdButton>
            <LdIcon name="justify"></LdIcon>
          </LdButton>
        </LdTooltip>
        <LdTooltip content="Align Right">
          <LdButton>
            <LdIcon name="justify-right"></LdIcon>
          </LdButton>
        </LdTooltip>
      </LdButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```
