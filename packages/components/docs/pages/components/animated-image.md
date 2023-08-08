---
meta:
  title: Animated Image
  description: A component for displaying animated GIFs and WEBPs that play and pause on interaction.
layout: component
---

```html:preview
<ld-animated-image
  src="https://leonardo.style/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
></ld-animated-image>
```

```jsx:react
import { LdAnimatedImage } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdAnimatedImage
    src="https://leonardo.style/assets/images/walk.gif"
    alt="Animation of untied shoes walking on pavement"
  />
);
```

:::tip
This component uses `<canvas>` to draw freeze frames, so images are subject to [cross-origin restrictions](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image).
:::

## Examples

### WEBP Images

Both GIF and WEBP images are supported.

```html:preview
<ld-animated-image
  src="https://leonardo.style/assets/images/tie.webp"
  alt="Animation of a shoe being tied"
></ld-animated-image>
```

```jsx:react
import { LdAnimatedImage } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdAnimatedImage src="https://leonardo.style/assets/images/tie.webp" alt="Animation of a shoe being tied" />
);
```

### Setting a Width and Height

To set a custom size, apply a width and/or height to the host element.

```html:preview
<ld-animated-image
  src="https://leonardo.style/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
  style="width: 150px; height: 200px;"
>
</ld-animated-image>
```

{% raw %}

```jsx:react
import { LdAnimatedImage } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdAnimatedImage
    src="https://leonardo.style/assets/images/walk.gif"
    alt="Animation of untied shoes walking on pavement"
    style={{ width: '150px', height: '200px' }}
  />
);
```

{% endraw %}

### Customizing the Control Box

You can change the appearance and location of the control box by targeting the `control-box` part in your styles.

```html:preview
<ld-animated-image
  src="https://leonardo.style/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
  class="animated-image-custom-control-box"
></ld-animated-image>

<style>
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
</style>
```

```jsx:react
import { LdAnimatedImage } from '@shoelace-style/leonardo/dist/react';

const css = `
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
`;

const App = () => (
  <>
    <LdAnimatedImage
      className="animated-image-custom-control-box"
      src="https://leonardo.style/assets/images/walk.gif"
      alt="Animation of untied shoes walking on pavement"
    />

    <style>{css}</style>
  </>
);
```
