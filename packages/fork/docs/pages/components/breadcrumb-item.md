---
meta:
  title: Breadcrumb Item
  description: Breadcrumb Items are used inside breadcrumbs to represent different links.
layout: component
---

```html:preview
<ld-breadcrumb>
  <ld-breadcrumb-item>
    <ld-icon slot="prefix" name="house"></ld-icon>
    Home
  </ld-breadcrumb-item>
  <ld-breadcrumb-item>Clothing</ld-breadcrumb-item>
  <ld-breadcrumb-item>Shirts</ld-breadcrumb-item>
</ld-breadcrumb>
```

```jsx:react
import { LdBreadcrumb, LdBreadcrumbItem, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdBreadcrumb>
    <LdBreadcrumbItem>
      <LdIcon slot="prefix" name="house"></LdIcon>
      Home
    </LdBreadcrumbItem>
    <LdBreadcrumbItem>Clothing</LdBreadcrumbItem>
    <LdBreadcrumbItem>Shirts</LdBreadcrumbItem>
  </LdBreadcrumb>
);
```

:::tip
Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).
:::
