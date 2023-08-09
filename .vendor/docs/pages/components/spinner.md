---
meta:
  title: Spinner
  description: Spinners are used to show the progress of an indeterminate operation.
layout: component
---

```html:preview
<ld-spinner></ld-spinner>
```

```jsx:react
import { LdSpinner } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdSpinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html:preview
<ld-spinner></ld-spinner>
<ld-spinner style="font-size: 2rem;"></ld-spinner>
<ld-spinner style="font-size: 3rem;"></ld-spinner>
```

{% raw %}

```jsx:react
import { LdSpinner } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdSpinner />
    <LdSpinner style={{ fontSize: '2rem' }} />
    <LdSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

{% endraw %}

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html:preview
<ld-spinner style="font-size: 50px; --track-width: 10px;"></ld-spinner>
```

{% raw %}

```jsx:react
import { LdSpinner } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

{% endraw %}

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html:preview
<ld-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></ld-spinner>
```

{% raw %}

```jsx:react
import { LdSpinner } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

{% endraw %}
