---
meta:
  title: Relative Time
  description: Outputs a localized time phrase relative to the current date and time.
layout: component
---

Localization is handled by the browser's [`Intl.RelativeTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.

```html:preview
<!-- Leonardo 2 release date 🎉 -->
<ld-relative-time date="2020-07-15T09:17:00-04:00"></ld-relative-time>
```

```jsx:react
import { LdRelativeTime } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdRelativeTime date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines when the date/time is calculated from. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript.

:::tip
When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.
:::

## Examples

### Keeping Time in Sync

Use the `sync` attribute to update the displayed value automatically as time passes.

```html:preview
<div class="relative-time-sync">
  <ld-relative-time sync></ld-relative-time>
</div>

<script>
  const container = document.querySelector('.relative-time-sync');
  const relativeTime = container.querySelector('ld-relative-time');

  relativeTime.date = new Date(new Date().getTime() - 60000);
</script>
```

```jsx:react
import { LdRelativeTime } from '@shoelace-style/leonardo/dist/react';

const date = new Date(new Date().getTime() - 60000);

const App = () => <LdRelativeTime date={date} sync />;
```

### Formatting Styles

You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for `narrow` and `short` formats.

```html:preview
<ld-relative-time date="2020-07-15T09:17:00-04:00" format="narrow"></ld-relative-time><br />
<ld-relative-time date="2020-07-15T09:17:00-04:00" format="short"></ld-relative-time><br />
<ld-relative-time date="2020-07-15T09:17:00-04:00" format="long"></ld-relative-time>
```

```jsx:react
import { LdRelativeTime } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdRelativeTime date="2020-07-15T09:17:00-04:00" format="narrow" />
    <br />
    <LdRelativeTime date="2020-07-15T09:17:00-04:00" format="short" />
    <br />
    <LdRelativeTime date="2020-07-15T09:17:00-04:00" format="long" />
  </>
);
```

### Localization

Use the `lang` attribute to set the desired locale.

```html:preview
English: <ld-relative-time date="2020-07-15T09:17:00-04:00" lang="en-US"></ld-relative-time><br />
Chinese: <ld-relative-time date="2020-07-15T09:17:00-04:00" lang="zh-CN"></ld-relative-time><br />
German: <ld-relative-time date="2020-07-15T09:17:00-04:00" lang="de"></ld-relative-time><br />
Greek: <ld-relative-time date="2020-07-15T09:17:00-04:00" lang="el"></ld-relative-time><br />
Russian: <ld-relative-time date="2020-07-15T09:17:00-04:00" lang="ru"></ld-relative-time>
```

```jsx:react
import { LdRelativeTime } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    English: <LdRelativeTime date="2020-07-15T09:17:00-04:00" lang="en-US" />
    <br />
    Chinese: <LdRelativeTime date="2020-07-15T09:17:00-04:00" lang="zh-CN" />
    <br />
    German: <LdRelativeTime date="2020-07-15T09:17:00-04:00" lang="de" />
    <br />
    Greek: <LdRelativeTime date="2020-07-15T09:17:00-04:00" lang="el" />
    <br />
    Russian: <LdRelativeTime date="2020-07-15T09:17:00-04:00" lang="ru" />
  </>
);
```
