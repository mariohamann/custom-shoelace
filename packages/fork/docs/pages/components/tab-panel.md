---
meta:
  title: Tab Panel
  description: Tab panels are used inside tab groups to display tabbed content.
layout: component
---

```html:preview
<ld-tab-group>
  <ld-tab slot="nav" panel="general">General</ld-tab>
  <ld-tab slot="nav" panel="custom">Custom</ld-tab>
  <ld-tab slot="nav" panel="advanced">Advanced</ld-tab>
  <ld-tab slot="nav" panel="disabled" disabled>Disabled</ld-tab>

  <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
  <ld-tab-panel name="custom">This is the custom tab panel.</ld-tab-panel>
  <ld-tab-panel name="advanced">This is the advanced tab panel.</ld-tab-panel>
  <ld-tab-panel name="disabled">This is a disabled tab panel.</ld-tab-panel>
</ld-tab-group>
```

```jsx:react
import { LdTab, LdTabGroup, LdTabPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTabGroup>
    <LdTab slot="nav" panel="general">
      General
    </LdTab>
    <LdTab slot="nav" panel="custom">
      Custom
    </LdTab>
    <LdTab slot="nav" panel="advanced">
      Advanced
    </LdTab>
    <LdTab slot="nav" panel="disabled" disabled>
      Disabled
    </LdTab>

    <LdTabPanel name="general">This is the general tab panel.</LdTabPanel>
    <LdTabPanel name="custom">This is the custom tab panel.</LdTabPanel>
    <LdTabPanel name="advanced">This is the advanced tab panel.</LdTabPanel>
    <LdTabPanel name="disabled">This is a disabled tab panel.</LdTabPanel>
  </LdTabGroup>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
