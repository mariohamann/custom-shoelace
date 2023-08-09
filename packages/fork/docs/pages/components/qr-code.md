---
meta:
  title: QR Code
  description: Generates a QR code and renders it using the Canvas API.
layout: component
---

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html:preview
<div class="qr-overview">
  <ld-qr-code value="https://leonardo.style/" label="Scan this code to visit Leonardo on the web!"></ld-qr-code>
  <br />

  <ld-input maxlength="255" clearable label="Value"></ld-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('ld-qr-code');
  const input = container.querySelector('ld-input');

  customElements.whenDefined('ld-qr-code').then(() => {
    input.value = qrCode.value;
    input.addEventListener('ld-input', () => (qrCode.value = input.value));
  });
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview ld-input {
    margin-top: 1rem;
  }
</style>
```

```jsx:react
import { useState } from 'react';
import { LdQrCode, LdInput } from '@shoelace-style/leonardo/dist/react';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview ld-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('https://leonardo.style/');

  return (
    <>
      <div className="qr-overview">
        <LdQrCode value={value} label="Scan this code to visit Leonardo on the web!" />
        <br />

        <LdInput maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html:preview
<ld-qr-code value="https://leonardo.style/" fill="deeppink" background="white"></ld-qr-code>
```

```jsx:react
import { LdQrCode } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdQrCode value="https://leonardo.style/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html:preview
<ld-qr-code value="https://leonardo.style/" size="64"></ld-qr-code>
```

```jsx:react
import { LdQrCode } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdQrCode value="https://leonardo.style/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html:preview
<ld-qr-code value="https://leonardo.style/" radius="0.5"></ld-qr-code>
```

```jsx:react
import { LdQrCode } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdQrCode value="https://leonardo.style/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html:preview
<div class="qr-error-correction">
  <ld-qr-code value="https://leonardo.style/" error-correction="L"></ld-qr-code>
  <ld-qr-code value="https://leonardo.style/" error-correction="M"></ld-qr-code>
  <ld-qr-code value="https://leonardo.style/" error-correction="Q"></ld-qr-code>
  <ld-qr-code value="https://leonardo.style/" error-correction="H"></ld-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx:react
import { LdQrCode } from '@shoelace-style/leonardo/dist/react';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <LdQrCode value="https://leonardo.style/" error-correction="L" />
        <LdQrCode value="https://leonardo.style/" error-correction="M" />
        <LdQrCode value="https://leonardo.style/" error-correction="Q" />
        <LdQrCode value="https://leonardo.style/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```
