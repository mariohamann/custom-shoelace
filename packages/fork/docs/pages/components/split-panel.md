---
meta:
  title: Split Panel
  description: Split panels display two adjacent panels, allowing the user to reposition them.
layout: component
---

```html:preview
<ld-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</ld-split-panel>
```

{% raw %}

```jsx:react
import { LdSplitPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSplitPanel>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </LdSplitPanel>
);
```

{% endraw %}

## Examples

### Initial Position

To set the initial position, use the `position` attribute. If no position is provided, it will default to 50% of the available space.

```html:preview
<ld-split-panel position="75">
  <div
    slot="start"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</ld-split-panel>
```

### Initial Position in Pixels

To set the initial position in pixels instead of a percentage, use the `position-in-pixels` attribute.

```html:preview
<ld-split-panel position-in-pixels="150">
  <div
    slot="start"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</ld-split-panel>
```

{% raw %}

```jsx:react
import { LdSplitPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSplitPanel position="200">
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </LdSplitPanel>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.

```html:preview
<ld-split-panel vertical style="height: 400px;">
  <div
    slot="start"
    style="height: 100%; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 100%; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</ld-split-panel>
```

{% raw %}

```jsx:react
import { LdSplitPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSplitPanel vertical style={{ height: '400px' }}>
    <div
      slot="start"
      style={{
        height: '100%',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '100%',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </LdSplitPanel>
);
```

{% endraw %}

### Snapping

To snap panels at specific positions while dragging, add the `snap` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at `100px` and `50%`, use `snap="100px 50%"`. You can also customize how close the divider must be before snapping with the `snap-threshold` attribute.

```html:preview
<div class="split-panel-snapping">
  <ld-split-panel snap="100px 50%">
    <div
      slot="start"
      style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      End
    </div>
  </ld-split-panel>

  <div class="split-panel-snapping-dots"></div>
</div>

<style>
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ld-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
</style>
```

{% raw %}

```jsx:react
import { LdSplitPanel } from '@shoelace-style/leonardo/dist/react';

const css = `
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ld-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
`;

const App = () => (
  <>
    <div className="split-panel-snapping">
      <LdSplitPanel snap="100px 50%">
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--ld-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--ld-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </LdSplitPanel>

      <div className="split-panel-snapping-dots" />
    </div>

    <style>{css}</style>
  </>
);
```

{% endraw %}

### Disabled

Add the `disabled` attribute to prevent the divider from being repositioned.

```html:preview
<ld-split-panel disabled>
  <div
    slot="start"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</ld-split-panel>
```

{% raw %}

```jsx:react
import { LdSplitPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSplitPanel disabled>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </LdSplitPanel>
);
```

{% endraw %}

### Setting the Primary Panel

By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to `start` or `end` using the `primary` attribute.

Try resizing the example below with each option and notice how the panels respond.

```html:preview
<div class="split-panel-primary">
  <ld-split-panel>
    <div
      slot="start"
      style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      End
    </div>
  </ld-split-panel>

  <ld-select label="Primary Panel" value="" style="max-width: 200px; margin-top: 1rem;">
    <ld-option value="">None</ld-option>
    <ld-option value="start">Start</ld-option>
    <ld-option value="end">End</ld-option>
  </ld-select>
</div>

<script>
  const container = document.querySelector('.split-panel-primary');
  const splitPanel = container.querySelector('ld-split-panel');
  const select = container.querySelector('ld-select');

  select.addEventListener('ld-change', () => (splitPanel.primary = select.value));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdSplitPanel, LdSelect, LdMenuItem } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [primary, setPrimary] = useState('');

  return (
    <>
      <LdSplitPanel primary={primary}>
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--ld-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--ld-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </LdSplitPanel>

      <LdSelect
        label="Primary Panel"
        value={primary}
        style={{ maxWidth: '200px', marginTop: '1rem' }}
        onLdChange={event => setPrimary(event.target.value)}
      >
        <LdMenuItem value="">None</LdMenuItem>
        <LdMenuItem value="start">Start</LdMenuItem>
        <LdMenuItem value="end">End</LdMenuItem>
      </LdSelect>
    </>
  );
};
```

{% endraw %}

### Min & Max

To set a minimum or maximum size of the primary panel, use the `--min` and `--max` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the `start` panel.

This examples demonstrates how you can ensure both panels are at least 150px using `--min`, `--max`, and the `calc()` function.

```html:preview
<ld-split-panel style="--min: 150px; --max: calc(100% - 150px);">
  <div
    slot="start"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</ld-split-panel>
```

{% raw %}

```jsx:react
import { LdSplitPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSplitPanel style={{ '--min': '150px', '--max': 'calc(100% - 150px)' }}>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </LdSplitPanel>
);
```

{% endraw %}

### Nested Split Panels

Create complex layouts that can be repositioned independently by nesting split panels.

```html:preview
<ld-split-panel>
  <div
    slot="start"
    style="height: 400px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
  >
    Start
  </div>
  <div slot="end">
    <ld-split-panel vertical style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
      >
        Top
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
      >
        Bottom
      </div>
    </ld-split-panel>
  </div>
</ld-split-panel>
```

{% raw %}

```jsx:react
import { LdSplitPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSplitPanel>
    <div
      slot="start"
      style={{
        height: '400px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div slot="end">
      <LdSplitPanel vertical style={{ height: '400px' }}>
        <div
          slot="start"
          style={{
            height: '100%',
            background: 'var(--ld-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '100%',
            background: 'var(--ld-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </LdSplitPanel>
    </div>
  </LdSplitPanel>
);
```

{% endraw %}

### Customizing the Divider

You can target the `divider` part to apply CSS properties to the divider. To add a custom handle, slot an icon into the `divider` slot. When customizing the divider, make sure to think about focus styles for keyboard users.

```html:preview
<ld-split-panel style="--divider-width: 20px;">
  <ld-icon slot="divider" name="grip-vertical"></ld-icon>
  <div
    slot="start"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</ld-split-panel>
```

{% raw %}

```jsx:react
import { LdSplitPanel, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSplitPanel style={{ '--divider-width': '20px' }}>
    <LdIcon slot="divider" name="grip-vertical" />
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--ld-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </LdSplitPanel>
);
```

{% endraw %}

Here's a more elaborate example that changes the divider's color and width and adds a styled handle.

```html:preview
<div class="split-panel-divider">
  <ld-split-panel>
    <ld-icon slot="divider" name="grip-vertical"></ld-icon>
    <div
      slot="start"
      style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--ld-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      End
    </div>
  </ld-split-panel>
</div>

<style>
  .split-panel-divider ld-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider ld-split-panel::part(divider) {
    background-color: var(--ld-color-pink-600);
  }

  .split-panel-divider ld-icon {
    position: absolute;
    border-radius: var(--ld-border-radius-small);
    background: var(--ld-color-pink-600);
    color: var(--ld-color-neutral-0);
    padding: 0.5rem 0.125rem;
  }

  .split-panel-divider ld-split-panel::part(divider):focus-visible {
    background-color: var(--ld-color-primary-600);
  }

  .split-panel-divider ld-split-panel:focus-within ld-icon {
    background-color: var(--ld-color-primary-600);
    color: var(--ld-color-neutral-0);
  }
</style>
```

{% raw %}

```jsx:react
import { LdSplitPanel, LdIcon } from '@shoelace-style/leonardo/dist/react';

const css = `
  .split-panel-divider ld-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider ld-split-panel::part(divider) {
    background-color: var(--ld-color-pink-600);
  }

  .split-panel-divider ld-icon {
    position: absolute;
    border-radius: var(--ld-border-radius-small);
    background: var(--ld-color-pink-600);
    color: var(--ld-color-neutral-0);
    padding: .5rem .125rem;
  }

  .split-panel-divider ld-split-panel::part(divider):focus-visible {
    background-color: var(--ld-color-primary-600);
  }

  .split-panel-divider ld-split-panel:focus-within ld-icon {
    background-color: var(--ld-color-primary-600);
    color: var(--ld-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="split-panel-divider">
      <LdSplitPanel>
        <LdIcon slot="divider" name="grip-vertical" />
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--ld-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--ld-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </LdSplitPanel>
    </div>

    <style>{css}</style>
  </>
);
```

{% endraw %}
