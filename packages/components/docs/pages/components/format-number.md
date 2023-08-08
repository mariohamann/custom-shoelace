---
meta:
  title: Format Number
  description: Formats a number using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html:preview
<div class="format-number-overview">
  <ld-format-number value="1000"></ld-format-number>
  <br /><br />
  <ld-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></ld-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('ld-format-number');
  const input = container.querySelector('ld-input');

  input.addEventListener('ld-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdFormatNumber, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <LdFormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html:preview
<ld-format-number type="percent" value="0"></ld-format-number><br />
<ld-format-number type="percent" value="0.25"></ld-format-number><br />
<ld-format-number type="percent" value="0.50"></ld-format-number><br />
<ld-format-number type="percent" value="0.75"></ld-format-number><br />
<ld-format-number type="percent" value="1"></ld-format-number>
```

```jsx:react
import { LdFormatNumber } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdFormatNumber type="percent" value={0} />
    <br />
    <LdFormatNumber type="percent" value={0.25} />
    <br />
    <LdFormatNumber type="percent" value={0.5} />
    <br />
    <LdFormatNumber type="percent" value={0.75} />
    <br />
    <LdFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
English: <ld-format-number value="2000" lang="en" minimum-fraction-digits="2"></ld-format-number><br />
German: <ld-format-number value="2000" lang="de" minimum-fraction-digits="2"></ld-format-number><br />
Russian: <ld-format-number value="2000" lang="ru" minimum-fraction-digits="2"></ld-format-number>
```

```jsx:react
import { LdFormatNumber } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    English: <LdFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <LdFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <LdFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html:preview
<ld-format-number type="currency" currency="USD" value="2000" lang="en-US"></ld-format-number><br />
<ld-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></ld-format-number><br />
<ld-format-number type="currency" currency="EUR" value="2000" lang="de"></ld-format-number><br />
<ld-format-number type="currency" currency="RUB" value="2000" lang="ru"></ld-format-number><br />
<ld-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></ld-format-number>
```

```jsx:react
import { LdFormatNumber } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <LdFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <LdFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <LdFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <LdFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```
