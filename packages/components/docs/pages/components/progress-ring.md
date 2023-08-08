---
meta:
  title: Progress Ring
  description: Progress rings are used to show the progress of a determinate operation in a circular fashion.
layout: component
---

```html:preview
<ld-progress-ring value="25"></ld-progress-ring>
```

```jsx:react
import { LdProgressRing } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html:preview
<ld-progress-ring value="50" style="--size: 200px;"></ld-progress-ring>
```

{% raw %}

```jsx:react
import { LdProgressRing } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdProgressRing value="50" style={{ '--size': '200px' }} />;
```

{% endraw %}

### Track and Indicator Width

Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.

```html:preview
<ld-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></ld-progress-ring>
```

{% raw %}

```jsx:react
import { LdProgressRing } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdProgressRing value="50" style={{ '--track-width': '6px', '--indicator-width': '12px' }} />;
```

{% endraw %}

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html:preview
<ld-progress-ring
  value="50"
  style="
    --track-color: pink;
    --indicator-color: deeppink;
  "
></ld-progress-ring>
```

{% raw %}

```jsx:react
import { LdProgressRing } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

{% endraw %}

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html:preview
<ld-progress-ring value="50" label="Upload progress"></ld-progress-ring>
```

```jsx:react
import { LdProgressRing } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html:preview
<ld-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</ld-progress-ring>

<br />

<ld-button circle><ld-icon name="dash" label="Decrease"></ld-icon></ld-button>
<ld-button circle><ld-icon name="plus" label="Increase"></ld-icon></ld-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdButton, LdIcon, LdProgressRing } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <LdProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </LdProgressRing>

      <br />

      <LdButton circle onClick={() => adjustValue(-10)}>
        <LdIcon name="dash" label="Decrease" />
      </LdButton>

      <LdButton circle onClick={() => adjustValue(10)}>
        <LdIcon name="plus" label="Increase" />
      </LdButton>
    </>
  );
};
```

{% endraw %}
