---
meta:
  title: Progress Bar
  description: Progress bars are used to show the status of an ongoing operation.
layout: component
---

```html:preview
<ld-progress-bar value="50"></ld-progress-bar>
```

```jsx:react
import { LdProgressBar } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html:preview
<ld-progress-bar value="50" label="Upload progress"></ld-progress-bar>
```

```jsx:react
import { LdProgressBar } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html:preview
<ld-progress-bar value="50" style="--height: 6px;"></ld-progress-bar>
```

{% raw %}

```jsx:react
import { LdProgressBar } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdProgressBar value={50} style={{ '--height': '6px' }} />;
```

{% endraw %}

### Showing Values

Use the default slot to show a value.

```html:preview
<ld-progress-bar value="50" class="progress-bar-values">50%</ld-progress-bar>

<br />

<ld-button circle><ld-icon name="dash" label="Decrease"></ld-icon></ld-button>
<ld-button circle><ld-icon name="plus" label="Increase"></ld-icon></ld-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { LdButton, LdIcon, LdProgressBar } from '@shoelace-style/leonardo/dist/react';

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
      <LdProgressBar value={value}>{value}%</LdProgressBar>

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

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html:preview
<ld-progress-bar indeterminate></ld-progress-bar>
```

```jsx:react
import { LdProgressBar } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdProgressBar indeterminate />;
```
