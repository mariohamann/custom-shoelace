---
meta:
  title: Tooltip
  description: Tooltips display additional information based on a specific action.
layout: component
---

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html:preview
<ld-tooltip content="This is a tooltip">
  <ld-button>Hover Me</ld-button>
</ld-tooltip>
```

```jsx:react
import { LdButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTooltip content="This is a tooltip">
    <LdButton>Hover Me</LdButton>
  </LdTooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html:preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <ld-tooltip content="top-start" placement="top-start">
      <ld-button></ld-button>
    </ld-tooltip>

    <ld-tooltip content="top" placement="top">
      <ld-button></ld-button>
    </ld-tooltip>

    <ld-tooltip content="top-end" placement="top-end">
      <ld-button></ld-button>
    </ld-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <ld-tooltip content="left-start" placement="left-start">
      <ld-button></ld-button>
    </ld-tooltip>

    <ld-tooltip content="right-start" placement="right-start">
      <ld-button></ld-button>
    </ld-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <ld-tooltip content="left" placement="left">
      <ld-button></ld-button>
    </ld-tooltip>

    <ld-tooltip content="right" placement="right">
      <ld-button></ld-button>
    </ld-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <ld-tooltip content="left-end" placement="left-end">
      <ld-button></ld-button>
    </ld-tooltip>

    <ld-tooltip content="right-end" placement="right-end">
      <ld-button></ld-button>
    </ld-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <ld-tooltip content="bottom-start" placement="bottom-start">
      <ld-button></ld-button>
    </ld-tooltip>

    <ld-tooltip content="bottom" placement="bottom">
      <ld-button></ld-button>
    </ld-tooltip>

    <ld-tooltip content="bottom-end" placement="bottom-end">
      <ld-button></ld-button>
    </ld-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
    margin: 1rem;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example ld-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) ld-tooltip:first-child ld-button,
  .tooltip-placement-example-row:nth-child(5) ld-tooltip:first-child ld-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) ld-tooltip:nth-child(2) ld-button,
  .tooltip-placement-example-row:nth-child(3) ld-tooltip:nth-child(2) ld-button,
  .tooltip-placement-example-row:nth-child(4) ld-tooltip:nth-child(2) ld-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx:react
import { LdButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example ld-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) ld-tooltip:first-child ld-button,
  .tooltip-placement-example-row:nth-child(5) ld-tooltip:first-child ld-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) ld-tooltip:nth-child(2) ld-button,
  .tooltip-placement-example-row:nth-child(3) ld-tooltip:nth-child(2) ld-button,
  .tooltip-placement-example-row:nth-child(4) ld-tooltip:nth-child(2) ld-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <LdTooltip content="top-start" placement="top-start">
          <LdButton />
        </LdTooltip>

        <LdTooltip content="top" placement="top">
          <LdButton />
        </LdTooltip>

        <LdTooltip content="top-end" placement="top-end">
          <LdButton />
        </LdTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <LdTooltip content="left-start" placement="left-start">
          <LdButton />
        </LdTooltip>

        <LdTooltip content="right-start" placement="right-start">
          <LdButton />
        </LdTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <LdTooltip content="left" placement="left">
          <LdButton />
        </LdTooltip>

        <LdTooltip content="right" placement="right">
          <LdButton />
        </LdTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <LdTooltip content="left-end" placement="left-end">
          <LdButton />
        </LdTooltip>

        <LdTooltip content="right-end" placement="right-end">
          <LdButton />
        </LdTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <LdTooltip content="bottom-start" placement="bottom-start">
          <LdButton />
        </LdTooltip>

        <LdTooltip content="bottom" placement="bottom">
          <LdButton />
        </LdTooltip>

        <LdTooltip content="bottom-end" placement="bottom-end">
          <LdButton />
        </LdTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html:preview
<ld-tooltip content="Click again to dismiss" trigger="click">
  <ld-button>Click to Toggle</ld-button>
</ld-tooltip>
```

```jsx:react
import { LdButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTooltip content="Click again to dismiss" trigger="click">
    <LdButton>Click to Toggle</LdButton>
  </LdTooltip>
);
```

### Manual Trigger

Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html:preview
<ld-button style="margin-right: 4rem;">Toggle Manually</ld-button>

<ld-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <ld-avatar label="User"></ld-avatar>
</ld-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdAvatar, LdButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LdButton style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </LdButton>

      <LdTooltip open={open} content="This is an avatar" trigger="manual">
        <LdAvatar />
      </LdTooltip>
    </>
  );
};
```

{% endraw %}

### Removing Arrows

You can control the size of tooltip arrows by overriding the `--ld-tooltip-arrow-size` design token. To remove them, set the value to `0` as shown below.

```html:preview
<ld-tooltip content="This is a tooltip" style="--ld-tooltip-arrow-size: 0;">
  <ld-button>No Arrow</ld-button>
</ld-tooltip>
```

{% raw %}

```jsx:react
import { LdButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <div style={{ '--ld-tooltip-arrow-size': '0' }}>
    <LdTooltip content="This is a tooltip">
      <LdButton>Above</LdButton>
    </LdTooltip>

    <LdTooltip content="This is a tooltip" placement="bottom">
      <LdButton>Below</LdButton>
    </LdTooltip>
  </div>
);
```

{% endraw %}

To override it globally, set it in a root block in your stylesheet after the Leonardo stylesheet is loaded.

```css
:root {
  --ld-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html:preview
<ld-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <ld-button>Hover me</ld-button>
</ld-tooltip>
```

```jsx:react
import { LdButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTooltip>
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <LdButton>Hover Me</LdButton>
  </LdTooltip>
);
```

### Setting a Maximum Width

Use the `--max-width` custom property to change the width the tooltip can grow to before wrapping occurs.

```html:preview
<ld-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels.">
  <ld-button>Hover me</ld-button>
</ld-tooltip>
```

{% raw %}

```jsx:react
import { LdButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTooltip style={{ '--max-width': '80px' }} content="This tooltip will wrap after only 80 pixels.">
    <LdButton>Hover Me</LdButton>
  </LdTooltip>
);
```

{% endraw %}

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="tooltip-hoist">
  <ld-tooltip content="This is a tooltip">
    <ld-button>No Hoist</ld-button>
  </ld-tooltip>

  <ld-tooltip content="This is a tooltip" hoist>
    <ld-button>Hoist</ld-button>
  </ld-tooltip>
</div>

<style>
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--ld-panel-border-color);
    overflow: hidden;
    padding: var(--ld-spacing-medium);
  }
</style>
```

```jsx:react
import { LdButton, LdTooltip } from '@shoelace-style/leonardo/dist/react';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--ld-panel-border-color);
    overflow: hidden;
    padding: var(--ld-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <LdTooltip content="This is a tooltip">
        <LdButton>No Hoist</LdButton>
      </LdTooltip>

      <LdTooltip content="This is a tooltip" hoist>
        <LdButton>Hoist</LdButton>
      </LdTooltip>
    </div>

    <style>{css}</style>
  </>
);
```
