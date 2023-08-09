---
meta:
  title: Format Bytes
  description: Formats a number as a human readable bytes value.
layout: component
---

```html:preview
<div class="format-bytes-overview">
  The file is <ld-format-bytes value="1000"></ld-format-bytes> in size. <br /><br />
  <ld-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></ld-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('ld-format-bytes');
  const input = container.querySelector('ld-input');

  input.addEventListener('ld-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdButton, LdFormatBytes, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <LdFormatBytes value={value} /> in size.
      <br />
      <br />
      <LdInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onLdInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

{% endraw %}

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html:preview
<ld-format-bytes value="12"></ld-format-bytes><br />
<ld-format-bytes value="1200"></ld-format-bytes><br />
<ld-format-bytes value="1200000"></ld-format-bytes><br />
<ld-format-bytes value="1200000000"></ld-format-bytes>
```

```jsx:react
import { LdFormatBytes } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdFormatBytes value="12" />
    <br />
    <LdFormatBytes value="1200" />
    <br />
    <LdFormatBytes value="1200000" />
    <br />
    <LdFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html:preview
<ld-format-bytes value="12" unit="bit"></ld-format-bytes><br />
<ld-format-bytes value="1200" unit="bit"></ld-format-bytes><br />
<ld-format-bytes value="1200000" unit="bit"></ld-format-bytes><br />
<ld-format-bytes value="1200000000" unit="bit"></ld-format-bytes>
```

```jsx:react
import { LdFormatBytes } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdFormatBytes value="12" unit="bit" />
    <br />
    <LdFormatBytes value="1200" unit="bit" />
    <br />
    <LdFormatBytes value="1200000" unit="bit" />
    <br />
    <LdFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
<ld-format-bytes value="12" lang="de"></ld-format-bytes><br />
<ld-format-bytes value="1200" lang="de"></ld-format-bytes><br />
<ld-format-bytes value="1200000" lang="de"></ld-format-bytes><br />
<ld-format-bytes value="1200000000" lang="de"></ld-format-bytes>
```

```jsx:react
import { LdFormatBytes } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdFormatBytes value="12" lang="de" />
    <br />
    <LdFormatBytes value="1200" lang="de" />
    <br />
    <LdFormatBytes value="1200000" lang="de" />
    <br />
    <LdFormatBytes value="1200000000" lang="de" />
  </>
);
```
