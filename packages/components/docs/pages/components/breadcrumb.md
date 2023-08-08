---
meta:
  title: Breadcrumb
  description: Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
layout: component
---

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html:preview
<ld-breadcrumb>
  <ld-breadcrumb-item>Catalog</ld-breadcrumb-item>
  <ld-breadcrumb-item>Clothing</ld-breadcrumb-item>
  <ld-breadcrumb-item>Women's</ld-breadcrumb-item>
  <ld-breadcrumb-item>Shirts &amp; Tops</ld-breadcrumb-item>
</ld-breadcrumb>
```

```jsx:react
import { LdBreadcrumb, LdBreadcrumbItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdBreadcrumb>
    <LdBreadcrumbItem>Catalog</LdBreadcrumbItem>
    <LdBreadcrumbItem>Clothing</LdBreadcrumbItem>
    <LdBreadcrumbItem>Women's</LdBreadcrumbItem>
    <LdBreadcrumbItem>Shirts &amp; Tops</LdBreadcrumbItem>
  </LdBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html:preview
<ld-breadcrumb>
  <ld-breadcrumb-item href="https://example.com/home">Homepage</ld-breadcrumb-item>

  <ld-breadcrumb-item href="https://example.com/home/services">Our Services</ld-breadcrumb-item>

  <ld-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</ld-breadcrumb-item>

  <ld-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</ld-breadcrumb-item>
</ld-breadcrumb>
```

```jsx:react
import { LdBreadcrumb, LdBreadcrumbItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdBreadcrumb>
    <LdBreadcrumbItem href="https://example.com/home">Homepage</LdBreadcrumbItem>

    <LdBreadcrumbItem href="https://example.com/home/services">Our Services</LdBreadcrumbItem>

    <LdBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</LdBreadcrumbItem>

    <LdBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</LdBreadcrumbItem>
  </LdBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html:preview
<ld-breadcrumb>
  <ld-icon name="dot" slot="separator"></ld-icon>
  <ld-breadcrumb-item>First</ld-breadcrumb-item>
  <ld-breadcrumb-item>Second</ld-breadcrumb-item>
  <ld-breadcrumb-item>Third</ld-breadcrumb-item>
</ld-breadcrumb>

<br />

<ld-breadcrumb>
  <ld-icon name="arrow-right" slot="separator"></ld-icon>
  <ld-breadcrumb-item>First</ld-breadcrumb-item>
  <ld-breadcrumb-item>Second</ld-breadcrumb-item>
  <ld-breadcrumb-item>Third</ld-breadcrumb-item>
</ld-breadcrumb>

<br />

<ld-breadcrumb>
  <span slot="separator">/</span>
  <ld-breadcrumb-item>First</ld-breadcrumb-item>
  <ld-breadcrumb-item>Second</ld-breadcrumb-item>
  <ld-breadcrumb-item>Third</ld-breadcrumb-item>
</ld-breadcrumb>
```

```jsx:react
import '@shoelace-style/leonardo/dist/components/icon/icon.js';
import { LdBreadcrumb, LdBreadcrumbItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdBreadcrumb>
      <ld-icon name="dot" slot="separator" />
      <LdBreadcrumbItem>First</LdBreadcrumbItem>
      <LdBreadcrumbItem>Second</LdBreadcrumbItem>
      <LdBreadcrumbItem>Third</LdBreadcrumbItem>
    </LdBreadcrumb>

    <br />

    <LdBreadcrumb>
      <ld-icon name="arrow-right" slot="separator" />
      <LdBreadcrumbItem>First</LdBreadcrumbItem>
      <LdBreadcrumbItem>Second</LdBreadcrumbItem>
      <LdBreadcrumbItem>Third</LdBreadcrumbItem>
    </LdBreadcrumb>

    <br />

    <LdBreadcrumb>
      <span slot="separator">/</span>
      <LdBreadcrumbItem>First</LdBreadcrumbItem>
      <LdBreadcrumbItem>Second</LdBreadcrumbItem>
      <LdBreadcrumbItem>Third</LdBreadcrumbItem>
    </LdBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html:preview
<ld-breadcrumb>
  <ld-breadcrumb-item>
    <ld-icon slot="prefix" name="house"></ld-icon>
    Home
  </ld-breadcrumb-item>
  <ld-breadcrumb-item>Articles</ld-breadcrumb-item>
  <ld-breadcrumb-item>Traveling</ld-breadcrumb-item>
</ld-breadcrumb>
```

```jsx:react
import { LdBreadcrumb, LdBreadcrumbItem, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdBreadcrumb>
    <LdBreadcrumbItem>
      <LdIcon slot="prefix" name="house" />
      Home
    </LdBreadcrumbItem>
    <LdBreadcrumbItem>Articles</LdBreadcrumbItem>
    <LdBreadcrumbItem>Traveling</LdBreadcrumbItem>
  </LdBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html:preview
<ld-breadcrumb>
  <ld-breadcrumb-item>Documents</ld-breadcrumb-item>
  <ld-breadcrumb-item>Policies</ld-breadcrumb-item>
  <ld-breadcrumb-item>
    Security
    <ld-icon slot="suffix" name="shield-lock"></ld-icon>
  </ld-breadcrumb-item>
</ld-breadcrumb>
```

```jsx:react
import { LdBreadcrumb, LdBreadcrumbItem, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdBreadcrumb>
    <LdBreadcrumbItem>Documents</LdBreadcrumbItem>
    <LdBreadcrumbItem>Policies</LdBreadcrumbItem>
    <LdBreadcrumbItem>
      Security
      <LdIcon slot="suffix" name="shield-lock"></LdIcon>
    </LdBreadcrumbItem>
  </LdBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html:preview
<ld-breadcrumb>
  <ld-breadcrumb-item>Homepage</ld-breadcrumb-item>
  <ld-breadcrumb-item>Our Services</ld-breadcrumb-item>
  <ld-breadcrumb-item>Digital Media</ld-breadcrumb-item>
  <ld-breadcrumb-item>
    Web Design
    <ld-dropdown slot="suffix">
      <ld-button slot="trigger" size="small" circle>
        <ld-icon label="More options" name="three-dots"></ld-icon>
      </ld-button>
      <ld-menu>
        <ld-menu-item type="checkbox" checked>Web Design</ld-menu-item>
        <ld-menu-item type="checkbox">Web Development</ld-menu-item>
        <ld-menu-item type="checkbox">Marketing</ld-menu-item>
      </ld-menu>
    </ld-dropdown>
  </ld-breadcrumb-item>
</ld-breadcrumb>
```

```jsx:react
import {
  LdBreadcrumb,
  LdBreadcrumbItem,
  LdButton,
  LdDropdown,
  LdIcon,
  LdMenu,
  LdMenuItem
} from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdBreadcrumb>
    <LdBreadcrumbItem>Homepage</LdBreadcrumbItem>
    <LdBreadcrumbItem>Our Services</LdBreadcrumbItem>
    <LdBreadcrumbItem>Digital Media</LdBreadcrumbItem>
    <LdBreadcrumbItem>
      Web Design
      <LdDropdown slot="suffix">
        <LdButton slot="trigger" size="small" circle>
          <LdIcon label="More options" name="three-dots"></LdIcon>
        </LdButton>
        <LdMenu>
          <LdMenuItem type="checkbox" checked>
            Web Design
          </LdMenuItem>
          <LdMenuItem type="checkbox">Web Development</LdMenuItem>
          <LdMenuItem type="checkbox">Marketing</LdMenuItem>
        </LdMenu>
      </LdDropdown>
    </LdBreadcrumbItem>
  </LdBreadcrumb>
);
```
