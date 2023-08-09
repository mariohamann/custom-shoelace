---
meta:
  title: Badge
  description: Badges are used to draw attention and display statuses or counts.
layout: component
---

```html:preview
<ld-badge>Badge</ld-badge>
```

```jsx:react
import { LdBadge } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdBadge>Badge</LdBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html:preview
<ld-badge variant="primary">Primary</ld-badge>
<ld-badge variant="success">Success</ld-badge>
<ld-badge variant="neutral">Neutral</ld-badge>
<ld-badge variant="warning">Warning</ld-badge>
<ld-badge variant="danger">Danger</ld-badge>
```

```jsx:react
import { LdBadge } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdBadge variant="primary">Primary</LdBadge>
    <LdBadge variant="success">Success</LdBadge>
    <LdBadge variant="neutral">Neutral</LdBadge>
    <LdBadge variant="warning">Warning</LdBadge>
    <LdBadge variant="danger">Danger</LdBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html:preview
<ld-badge variant="primary" pill>Primary</ld-badge>
<ld-badge variant="success" pill>Success</ld-badge>
<ld-badge variant="neutral" pill>Neutral</ld-badge>
<ld-badge variant="warning" pill>Warning</ld-badge>
<ld-badge variant="danger" pill>Danger</ld-badge>
```

```jsx:react
import { LdBadge } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdBadge variant="primary" pill>
      Primary
    </LdBadge>
    <LdBadge variant="success" pill>
      Success
    </LdBadge>
    <LdBadge variant="neutral" pill>
      Neutral
    </LdBadge>
    <LdBadge variant="warning" pill>
      Warning
    </LdBadge>
    <LdBadge variant="danger" pill>
      Danger
    </LdBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html:preview
<div class="badge-pulse">
  <ld-badge variant="primary" pill pulse>1</ld-badge>
  <ld-badge variant="success" pill pulse>1</ld-badge>
  <ld-badge variant="neutral" pill pulse>1</ld-badge>
  <ld-badge variant="warning" pill pulse>1</ld-badge>
  <ld-badge variant="danger" pill pulse>1</ld-badge>
</div>

<style>
  .badge-pulse ld-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx:react
import { LdBadge } from '@shoelace-style/leonardo/dist/react';

const css = `
  .badge-pulse ld-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <LdBadge variant="primary" pill pulse>
        1
      </LdBadge>
      <LdBadge variant="success" pill pulse>
        1
      </LdBadge>
      <LdBadge variant="neutral" pill pulse>
        1
      </LdBadge>
      <LdBadge variant="warning" pill pulse>
        1
      </LdBadge>
      <LdBadge variant="danger" pill pulse>
        1
      </LdBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html:preview
<ld-button>
  Requests
  <ld-badge pill>30</ld-badge>
</ld-button>

<ld-button style="margin-inline-start: 1rem;">
  Warnings
  <ld-badge variant="warning" pill>8</ld-badge>
</ld-button>

<ld-button style="margin-inline-start: 1rem;">
  Errors
  <ld-badge variant="danger" pill>6</ld-badge>
</ld-button>
```

{% raw %}

```jsx:react
import { LdBadge, LdButton } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdButton>
      Requests
      <LdBadge pill>30</LdBadge>
    </LdButton>

    <LdButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <LdBadge variant="warning" pill>
        8
      </LdBadge>
    </LdButton>

    <LdButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <LdBadge variant="danger" pill>
        6
      </LdBadge>
    </LdButton>
  </>
);
```

{% endraw %}

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html:preview
<ld-menu style="max-width: 240px;">
  <ld-menu-label>Messages</ld-menu-label>
  <ld-menu-item>Comments <ld-badge slot="suffix" variant="neutral" pill>4</ld-badge></ld-menu-item>
  <ld-menu-item>Replies <ld-badge slot="suffix" variant="neutral" pill>12</ld-badge></ld-menu-item>
</ld-menu>
```

{% raw %}

```jsx:react
import { LdBadge, LdButton, LdMenu, LdMenuItem, LdMenuLabel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--ld-panel-border-color)',
      borderRadius: 'var(--ld-border-radius-medium)'
    }}
  >
    <LdMenuLabel>Messages</LdMenuLabel>
    <LdMenuItem>
      Comments
      <LdBadge slot="suffix" variant="neutral" pill>
        4
      </LdBadge>
    </LdMenuItem>
    <LdMenuItem>
      Replies
      <LdBadge slot="suffix" variant="neutral" pill>
        12
      </LdBadge>
    </LdMenuItem>
  </LdMenu>
);
```

{% endraw %}
