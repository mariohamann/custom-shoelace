---
meta:
  title: Tab Group
  description: Tab groups organize content into a container that shows one section at a time.
layout: component
---

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

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

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html:preview
<ld-tab-group placement="bottom">
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
  <LdTabGroup placement="bottom">
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

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html:preview
<ld-tab-group placement="start">
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
  <LdTabGroup placement="start">
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

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html:preview
<ld-tab-group placement="end">
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
  <LdTabGroup placement="end">
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

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html:preview
<ld-tab-group class="tabs-closable">
  <ld-tab slot="nav" panel="general">General</ld-tab>
  <ld-tab slot="nav" panel="closable-1" closable>Closable 1</ld-tab>
  <ld-tab slot="nav" panel="closable-2" closable>Closable 2</ld-tab>
  <ld-tab slot="nav" panel="closable-3" closable>Closable 3</ld-tab>

  <ld-tab-panel name="general">This is the general tab panel.</ld-tab-panel>
  <ld-tab-panel name="closable-1">This is the first closable tab panel.</ld-tab-panel>
  <ld-tab-panel name="closable-2">This is the second closable tab panel.</ld-tab-panel>
  <ld-tab-panel name="closable-3">This is the third closable tab panel.</ld-tab-panel>
</ld-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('ld-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`ld-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx:react
import { LdTab, LdTabGroup, LdTabPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('ld-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <LdTabGroup className="tabs-closable" onLdClose={handleClose}>
      <LdTab slot="nav" panel="general">
        General
      </LdTab>
      <LdTab slot="nav" panel="closable-1" closable onLdClose={handleClose}>
        Closable 1
      </LdTab>
      <LdTab slot="nav" panel="closable-2" closable onLdClose={handleClose}>
        Closable 2
      </LdTab>
      <LdTab slot="nav" panel="closable-3" closable onLdClose={handleClose}>
        Closable 3
      </LdTab>

      <LdTabPanel name="general">This is the general tab panel.</LdTabPanel>
      <LdTabPanel name="closable-1">This is the first closable tab panel.</LdTabPanel>
      <LdTabPanel name="closable-2">This is the second closable tab panel.</LdTabPanel>
      <LdTabPanel name="closable-3">This is the third closable tab panel.</LdTabPanel>
    </LdTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html:preview
<ld-tab-group>
  <ld-tab slot="nav" panel="tab-1">Tab 1</ld-tab>
  <ld-tab slot="nav" panel="tab-2">Tab 2</ld-tab>
  <ld-tab slot="nav" panel="tab-3">Tab 3</ld-tab>
  <ld-tab slot="nav" panel="tab-4">Tab 4</ld-tab>
  <ld-tab slot="nav" panel="tab-5">Tab 5</ld-tab>
  <ld-tab slot="nav" panel="tab-6">Tab 6</ld-tab>
  <ld-tab slot="nav" panel="tab-7">Tab 7</ld-tab>
  <ld-tab slot="nav" panel="tab-8">Tab 8</ld-tab>
  <ld-tab slot="nav" panel="tab-9">Tab 9</ld-tab>
  <ld-tab slot="nav" panel="tab-10">Tab 10</ld-tab>
  <ld-tab slot="nav" panel="tab-11">Tab 11</ld-tab>
  <ld-tab slot="nav" panel="tab-12">Tab 12</ld-tab>
  <ld-tab slot="nav" panel="tab-13">Tab 13</ld-tab>
  <ld-tab slot="nav" panel="tab-14">Tab 14</ld-tab>
  <ld-tab slot="nav" panel="tab-15">Tab 15</ld-tab>
  <ld-tab slot="nav" panel="tab-16">Tab 16</ld-tab>
  <ld-tab slot="nav" panel="tab-17">Tab 17</ld-tab>
  <ld-tab slot="nav" panel="tab-18">Tab 18</ld-tab>
  <ld-tab slot="nav" panel="tab-19">Tab 19</ld-tab>
  <ld-tab slot="nav" panel="tab-20">Tab 20</ld-tab>

  <ld-tab-panel name="tab-1">Tab panel 1</ld-tab-panel>
  <ld-tab-panel name="tab-2">Tab panel 2</ld-tab-panel>
  <ld-tab-panel name="tab-3">Tab panel 3</ld-tab-panel>
  <ld-tab-panel name="tab-4">Tab panel 4</ld-tab-panel>
  <ld-tab-panel name="tab-5">Tab panel 5</ld-tab-panel>
  <ld-tab-panel name="tab-6">Tab panel 6</ld-tab-panel>
  <ld-tab-panel name="tab-7">Tab panel 7</ld-tab-panel>
  <ld-tab-panel name="tab-8">Tab panel 8</ld-tab-panel>
  <ld-tab-panel name="tab-9">Tab panel 9</ld-tab-panel>
  <ld-tab-panel name="tab-10">Tab panel 10</ld-tab-panel>
  <ld-tab-panel name="tab-11">Tab panel 11</ld-tab-panel>
  <ld-tab-panel name="tab-12">Tab panel 12</ld-tab-panel>
  <ld-tab-panel name="tab-13">Tab panel 13</ld-tab-panel>
  <ld-tab-panel name="tab-14">Tab panel 14</ld-tab-panel>
  <ld-tab-panel name="tab-15">Tab panel 15</ld-tab-panel>
  <ld-tab-panel name="tab-16">Tab panel 16</ld-tab-panel>
  <ld-tab-panel name="tab-17">Tab panel 17</ld-tab-panel>
  <ld-tab-panel name="tab-18">Tab panel 18</ld-tab-panel>
  <ld-tab-panel name="tab-19">Tab panel 19</ld-tab-panel>
  <ld-tab-panel name="tab-20">Tab panel 20</ld-tab-panel>
</ld-tab-group>
```

```jsx:react
import { LdTab, LdTabGroup, LdTabPanel } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTabGroup>
    <LdTab slot="nav" panel="tab-1">
      Tab 1
    </LdTab>
    <LdTab slot="nav" panel="tab-2">
      Tab 2
    </LdTab>
    <LdTab slot="nav" panel="tab-3">
      Tab 3
    </LdTab>
    <LdTab slot="nav" panel="tab-4">
      Tab 4
    </LdTab>
    <LdTab slot="nav" panel="tab-5">
      Tab 5
    </LdTab>
    <LdTab slot="nav" panel="tab-6">
      Tab 6
    </LdTab>
    <LdTab slot="nav" panel="tab-7">
      Tab 7
    </LdTab>
    <LdTab slot="nav" panel="tab-8">
      Tab 8
    </LdTab>
    <LdTab slot="nav" panel="tab-9">
      Tab 9
    </LdTab>
    <LdTab slot="nav" panel="tab-10">
      Tab 10
    </LdTab>
    <LdTab slot="nav" panel="tab-11">
      Tab 11
    </LdTab>
    <LdTab slot="nav" panel="tab-12">
      Tab 12
    </LdTab>
    <LdTab slot="nav" panel="tab-13">
      Tab 13
    </LdTab>
    <LdTab slot="nav" panel="tab-14">
      Tab 14
    </LdTab>
    <LdTab slot="nav" panel="tab-15">
      Tab 15
    </LdTab>
    <LdTab slot="nav" panel="tab-16">
      Tab 16
    </LdTab>
    <LdTab slot="nav" panel="tab-17">
      Tab 17
    </LdTab>
    <LdTab slot="nav" panel="tab-18">
      Tab 18
    </LdTab>
    <LdTab slot="nav" panel="tab-19">
      Tab 19
    </LdTab>
    <LdTab slot="nav" panel="tab-20">
      Tab 20
    </LdTab>

    <LdTabPanel name="tab-1">Tab panel 1</LdTabPanel>
    <LdTabPanel name="tab-2">Tab panel 2</LdTabPanel>
    <LdTabPanel name="tab-3">Tab panel 3</LdTabPanel>
    <LdTabPanel name="tab-4">Tab panel 4</LdTabPanel>
    <LdTabPanel name="tab-5">Tab panel 5</LdTabPanel>
    <LdTabPanel name="tab-6">Tab panel 6</LdTabPanel>
    <LdTabPanel name="tab-7">Tab panel 7</LdTabPanel>
    <LdTabPanel name="tab-8">Tab panel 8</LdTabPanel>
    <LdTabPanel name="tab-9">Tab panel 9</LdTabPanel>
    <LdTabPanel name="tab-10">Tab panel 10</LdTabPanel>
    <LdTabPanel name="tab-11">Tab panel 11</LdTabPanel>
    <LdTabPanel name="tab-12">Tab panel 12</LdTabPanel>
    <LdTabPanel name="tab-13">Tab panel 13</LdTabPanel>
    <LdTabPanel name="tab-14">Tab panel 14</LdTabPanel>
    <LdTabPanel name="tab-15">Tab panel 15</LdTabPanel>
    <LdTabPanel name="tab-16">Tab panel 16</LdTabPanel>
    <LdTabPanel name="tab-17">Tab panel 17</LdTabPanel>
    <LdTabPanel name="tab-18">Tab panel 18</LdTabPanel>
    <LdTabPanel name="tab-19">Tab panel 19</LdTabPanel>
    <LdTabPanel name="tab-20">Tab panel 20</LdTabPanel>
  </LdTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press [[Left]] or [[Right]] to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press [[Space]] or [[Enter]] before showing the tab panel (manual activation).

```html:preview
<ld-tab-group activation="manual">
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
  <LdTabGroup activation="manual">
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
