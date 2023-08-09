---
meta:
  title: Vue
  description: Tips for using Leonardo in your Vue 3 app.
---

# Vue

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use Leonardo in your Vue apps with ease.

:::tip
These instructions are for Vue 3 and above. If you're using Vue 2, please see the [Vue 2 instructions](/frameworks/vue-2).
:::

## Installation

To add Leonardo to your Vue app, install the package from npm.

```bash
npm install @shoelace-style/leonardo
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import '@shoelace-style/leonardo/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/leonardo/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/leonardo@%VERSION%/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@shoelace-style/leonardo/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Configuration

You'll need to tell Vue to ignore Leonardo components. This is pretty easy because they all start with `ld-`.

```js
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('ld-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
```

Now you can start using Leonardo components in your app!

## Usage

### QR code generator example

```html
<template>
  <div class="container">
    <h1>QR code generator</h1>

    <ld-input maxlength="255" clearable label="Value" v-model="qrCode"></ld-input>

    <ld-qr-code :value="qrCode"></ld-qr-code>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import '@shoelace-style/leonardo/dist/components/qr-code/qr-code.js';
  import '@shoelace-style/leonardo/dist/components/input/input.js';

  const qrCode = ref();
</script>

<style>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }

  ld-input {
    margin: var(--ld-spacing-large) 0;
  }
</style>
```

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<ld-color-picker :swatches.prop="mySwatches" />
```

:::tip
Are you using Leonardo with Vue? [Help us improve this page!](https://github.com/leonardo-design-system/leonardo/blob/next/docs/frameworks/vue.md)
:::

### Slots

To use Leonardo components with slots, follow the Vue documentation on using [slots with custom elements](https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue).

Here is an example:

```html
<ld-drawer label="Drawer" placement="start" class="drawer-placement-start" :open="drawerIsOpen">
  This drawer slides in from the start.
  <div slot="footer">
    <ld-button variant="primary" @click=" drawerIsOpen = false">Close</ld-button>
  </div>
</ld-drawer>
```
