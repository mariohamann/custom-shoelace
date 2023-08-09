---
meta:
  title: Tag
  description: Tags are used as labels to organize things or to indicate a selection.
layout: component
---

```html:preview
<ld-tag variant="primary">Primary</ld-tag>
<ld-tag variant="success">Success</ld-tag>
<ld-tag variant="neutral">Neutral</ld-tag>
<ld-tag variant="warning">Warning</ld-tag>
<ld-tag variant="danger">Danger</ld-tag>
```

```jsx:react
import { LdTag } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdTag variant="primary">Primary</LdTag>
    <LdTag variant="success">Success</LdTag>
    <LdTag variant="neutral">Neutral</LdTag>
    <LdTag variant="warning">Warning</LdTag>
    <LdTag variant="danger">Danger</LdTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html:preview
<ld-tag size="small">Small</ld-tag>
<ld-tag size="medium">Medium</ld-tag>
<ld-tag size="large">Large</ld-tag>
```

```jsx:react
import { LdTag } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdTag size="small">Small</LdTag>
    <LdTag size="medium">Medium</LdTag>
    <LdTag size="large">Large</LdTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html:preview
<ld-tag size="small" pill>Small</ld-tag>
<ld-tag size="medium" pill>Medium</ld-tag>
<ld-tag size="large" pill>Large</ld-tag>
```

```jsx:react
import { LdTag } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdTag size="small" pill>
      Small
    </LdTag>
    <LdTag size="medium" pill>
      Medium
    </LdTag>
    <LdTag size="large" pill>
      Large
    </LdTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html:preview
<div class="tags-removable">
  <ld-tag size="small" removable>Small</ld-tag>
  <ld-tag size="medium" removable>Medium</ld-tag>
  <ld-tag size="large" removable>Large</ld-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('ld-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable ld-tag {
    transition: var(--ld-transition-medium) opacity;
  }
</style>
```

```jsx:react
import { LdTag } from '@shoelace-style/leonardo/dist/react';

const css = `
  .tags-removable ld-tag {
    transition: var(--ld-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <LdTag size="small" removable onLdRemove={handleRemove}>
          Small
        </LdTag>

        <LdTag size="medium" removable onLdRemove={handleRemove}>
          Medium
        </LdTag>

        <LdTag size="large" removable onLdRemove={handleRemove}>
          Large
        </LdTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```
