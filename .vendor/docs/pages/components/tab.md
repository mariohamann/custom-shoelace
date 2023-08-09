---
meta:
  title: Tab
  description: Tabs are used inside tab groups to represent and activate tab panels.
layout: component
---

```html:preview
<ld-tab>Tab</ld-tab>
<ld-tab active>Active</ld-tab>
<ld-tab closable>Closable</ld-tab>
<ld-tab disabled>Disabled</ld-tab>
```

```jsx:react
import { LdTab } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdTab>Tab</LdTab>
    <LdTab active>Active</LdTab>
    <LdTab closable>Closable</LdTab>
    <LdTab disabled>Disabled</LdTab>
  </>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
