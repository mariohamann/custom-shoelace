---
meta:
  title: Tree Item
  description: A tree item serves as a hierarchical node that lives inside a tree.
layout: component
---

```html:preview
<ld-tree>
  <ld-tree-item>
    Item 1
    <ld-tree-item>Item A</ld-tree-item>
    <ld-tree-item>Item B</ld-tree-item>
    <ld-tree-item>Item C</ld-tree-item>
  </ld-tree-item>
  <ld-tree-item>Item 2</ld-tree-item>
  <ld-tree-item>Item 3</ld-tree-item>
</ld-tree>
```

<!-- prettier-ignore -->
```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTree>
    <LdTreeItem>
      Item 1
      <LdTreeItem>Item A</LdTreeItem>
      <LdTreeItem>Item B</LdTreeItem>
      <LdTreeItem>Item C</LdTreeItem>
    </LdTreeItem>
    <LdTreeItem>Item 2</LdTreeItem>
    <LdTreeItem>Item 3</LdTreeItem>
  </LdTree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html:preview
<ld-tree>
  <ld-tree-item>
    Item 1
    <ld-tree-item>
      Item A
      <ld-tree-item>Item Z</ld-tree-item>
      <ld-tree-item>Item Y</ld-tree-item>
      <ld-tree-item>Item X</ld-tree-item>
    </ld-tree-item>
    <ld-tree-item>Item B</ld-tree-item>
    <ld-tree-item>Item C</ld-tree-item>
  </ld-tree-item>
  <ld-tree-item>Item 2</ld-tree-item>
  <ld-tree-item>Item 3</ld-tree-item>
</ld-tree>
```

<!-- prettier-ignore -->
```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTree>
    <LdTreeItem>
      Item 1
      <LdTreeItem>
        Item A
        <LdTreeItem>Item Z</LdTreeItem>
        <LdTreeItem>Item Y</LdTreeItem>
        <LdTreeItem>Item X</LdTreeItem>
      </LdTreeItem>
      <LdTreeItem>Item B</LdTreeItem>
      <LdTreeItem>Item C</LdTreeItem>
    </LdTreeItem>
    <LdTreeItem>Item 2</LdTreeItem>
    <LdTreeItem>Item 3</LdTreeItem>
  </LdTree>
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html:preview
<ld-tree>
  <ld-tree-item selected>
    Item 1
    <ld-tree-item>Item A</ld-tree-item>
    <ld-tree-item>Item B</ld-tree-item>
    <ld-tree-item>Item C</ld-tree-item>
  </ld-tree-item>
  <ld-tree-item>Item 2</ld-tree-item>
  <ld-tree-item>Item 3</ld-tree-item>
</ld-tree>
```

<!-- prettier-ignore -->
```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTree>
    <LdTreeItem selected>
      Item 1
      <LdTreeItem>Item A</LdTreeItem>
      <LdTreeItem>Item B</LdTreeItem>
      <LdTreeItem>Item C</LdTreeItem>
    </LdTreeItem>
    <LdTreeItem>Item 2</LdTreeItem>
    <LdTreeItem>Item 3</LdTreeItem>
  </LdTree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html:preview
<ld-tree>
  <ld-tree-item expanded>
    Item 1
    <ld-tree-item expanded>
      Item A
      <ld-tree-item>Item Z</ld-tree-item>
      <ld-tree-item>Item Y</ld-tree-item>
      <ld-tree-item>Item X</ld-tree-item>
    </ld-tree-item>
    <ld-tree-item>Item B</ld-tree-item>
    <ld-tree-item>Item C</ld-tree-item>
  </ld-tree-item>
  <ld-tree-item>Item 2</ld-tree-item>
  <ld-tree-item>Item 3</ld-tree-item>
</ld-tree>
```

<!-- prettier-ignore -->
```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTree>
    <LdTreeItem expanded>
      Item 1
      <LdTreeItem expanded>
        Item A
        <LdTreeItem>Item Z</LdTreeItem>
        <LdTreeItem>Item Y</LdTreeItem>
        <LdTreeItem>Item X</LdTreeItem>
      </LdTreeItem>
      <LdTreeItem>Item B</LdTreeItem>
      <LdTreeItem>Item C</LdTreeItem>
    </LdTreeItem>
    <LdTreeItem>Item 2</LdTreeItem>
    <LdTreeItem>Item 3</LdTreeItem>
  </LdTree>
);
```
