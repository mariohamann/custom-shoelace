---
meta:
  title: Format Date
  description: Formats a date/time using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html:preview
<!-- Leonardo 2 release date 🎉 -->
<ld-format-date date="2020-07-15T09:17:00-04:00"></ld-format-date>
```

```jsx:react
import { LdFormatDate } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdFormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

:::tip
When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.
:::

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html:preview
<!-- Human-readable date -->
<ld-format-date month="long" day="numeric" year="numeric"></ld-format-date><br />

<!-- Time -->
<ld-format-date hour="numeric" minute="numeric"></ld-format-date><br />

<!-- Weekday -->
<ld-format-date weekday="long"></ld-format-date><br />

<!-- Month -->
<ld-format-date month="long"></ld-format-date><br />

<!-- Year -->
<ld-format-date year="numeric"></ld-format-date><br />

<!-- No formatting options -->
<ld-format-date></ld-format-date>
```

```jsx:react
import { LdFormatDate } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    {/* Human-readable date */}
    <LdFormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <LdFormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <LdFormatDate weekday="long" />
    <br />

    {/* Month */}
    <LdFormatDate month="long" />
    <br />

    {/* Year */}
    <LdFormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <LdFormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html:preview
<ld-format-date hour="numeric" minute="numeric" hour-format="12"></ld-format-date><br />
<ld-format-date hour="numeric" minute="numeric" hour-format="24"></ld-format-date>
```

```jsx:react
import { LdFormatDate } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdFormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <LdFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html:preview
English: <ld-format-date lang="en"></ld-format-date><br />
French: <ld-format-date lang="fr"></ld-format-date><br />
Russian: <ld-format-date lang="ru"></ld-format-date>
```

```jsx:react
import { LdFormatDate } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    English: <LdFormatDate lang="en" />
    <br />
    French: <LdFormatDate lang="fr" />
    <br />
    Russian: <LdFormatDate lang="ru" />
  </>
);
```
