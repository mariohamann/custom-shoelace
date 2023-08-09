---
meta:
  title: Details
  description: Details show a brief summary and expand to show additional content.
layout: component
---

<!-- cspell:dictionaries lorem-ipsum -->

```html:preview
<ld-details summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</ld-details>
```

```jsx:react
import { LdDetails } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdDetails summary="Toggle Me">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </LdDetails>
);
```

## Examples

### Disabled

Use the `disable` attribute to prevent the details from expanding.

```html:preview
<ld-details summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</ld-details>
```

```jsx:react
import { LdDetails } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdDetails summary="Disabled" disabled>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </LdDetails>
);
```

### Customizing the Summary Icon

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `summary-icon` part as shown below.

```html:preview
<ld-details summary="Toggle Me" class="custom-icons">
  <ld-icon name="plus-square" slot="expand-icon"></ld-icon>
  <ld-icon name="dash-square" slot="collapse-icon"></ld-icon>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</ld-details>

<style>
  ld-details.custom-icons::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

```jsx:react
import { LdDetails, LdIcon } from '@shoelace-style/leonardo/dist/react';

const css = `
  ld-details.custom-icon::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
`;

const App = () => (
  <>
    <LdDetails summary="Toggle Me" class="custom-icon">
      <LdIcon name="plus-square" slot="expand-icon" />
      <LdIcon name="dash-square" slot="collapse-icon" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </LdDetails>

    <style>{css}</style>
  </>
);
```

### Grouping Details

Details are designed to function independently, but you can simulate a group or "accordion" where only one is shown at a time by listening for the `ld-show` event.

```html:preview
<div class="details-group-example">
  <ld-details summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </ld-details>

  <ld-details summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </ld-details>

  <ld-details summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </ld-details>
</div>

<script>
  const container = document.querySelector('.details-group-example');

  // Close all other details when one is shown
  container.addEventListener('ld-show', event => {
    [...container.querySelectorAll('ld-details')].map(details => (details.open = event.target === details));
  });
</script>

<style>
  .details-group-example ld-details:not(:last-of-type) {
    margin-bottom: var(--ld-spacing-2x-small);
  }
</style>
```
