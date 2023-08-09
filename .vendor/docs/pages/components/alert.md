---
meta:
  title: Alert
  description: Alerts are used to display important messages inline or as toast notifications.
layout: component
---

```html:preview
<ld-alert open>
  <ld-icon slot="icon" name="info-circle"></ld-icon>
  This is a standard alert. You can customize its content and even the icon.
</ld-alert>
```

```jsx:react
import { LdAlert, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdAlert open>
    <LdIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </LdAlert>
);
```

:::tip
Alerts will not be visible if the `open` attribute is not present.
:::

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html:preview
<ld-alert variant="primary" open>
  <ld-icon slot="icon" name="info-circle"></ld-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</ld-alert>

<br />

<ld-alert variant="success" open>
  <ld-icon slot="icon" name="check2-circle"></ld-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</ld-alert>

<br />

<ld-alert variant="neutral" open>
  <ld-icon slot="icon" name="gear"></ld-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</ld-alert>

<br />

<ld-alert variant="warning" open>
  <ld-icon slot="icon" name="exclamation-triangle"></ld-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</ld-alert>

<br />

<ld-alert variant="danger" open>
  <ld-icon slot="icon" name="exclamation-octagon"></ld-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</ld-alert>
```

```jsx:react
import { LdAlert, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdAlert variant="primary" open>
      <LdIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </LdAlert>

    <br />

    <LdAlert variant="success" open>
      <LdIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </LdAlert>

    <br />

    <LdAlert variant="neutral" open>
      <LdIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take affect on next login.
    </LdAlert>

    <br />

    <LdAlert variant="warning" open>
      <LdIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </LdAlert>

    <br />

    <LdAlert variant="danger" open>
      <LdIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </LdAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html:preview
<ld-alert variant="primary" open closable class="alert-closable">
  <ld-icon slot="icon" name="info-circle"></ld-icon>
  You can close this alert any time!
</ld-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('ld-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { LdAlert, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <LdAlert open={open} closable onLdAfterHide={handleHide}>
      <LdIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </LdAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html:preview
<ld-alert variant="primary" open> Nothing fancy here, just a simple alert. </ld-alert>
```

```jsx:react
import { LdAlert } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </LdAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html:preview
<div class="alert-duration">
  <ld-button variant="primary">Show Alert</ld-button>

  <ld-alert variant="primary" duration="3000" closable>
    <ld-icon slot="icon" name="info-circle"></ld-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </ld-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('ld-button');
  const alert = container.querySelector('ld-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration ld-alert {
    margin-top: var(--ld-spacing-medium);
  }
</style>
```

```jsx:react
import { useState } from 'react';
import { LdAlert, LdButton, LdIcon } from '@shoelace-style/leonardo/dist/react';

const css = `
  .alert-duration ld-alert {
    margin-top: var(--ld-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <LdButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </LdButton>

        <LdAlert variant="primary" duration="3000" open={open} closable onLdAfterHide={() => setOpen(false)}>
          <LdIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </LdAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html:preview
<div class="alert-toast">
  <ld-button variant="primary">Primary</ld-button>
  <ld-button variant="success">Success</ld-button>
  <ld-button variant="neutral">Neutral</ld-button>
  <ld-button variant="warning">Warning</ld-button>
  <ld-button variant="danger">Danger</ld-button>

  <ld-alert variant="primary" duration="3000" closable>
    <ld-icon slot="icon" name="info-circle"></ld-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </ld-alert>

  <ld-alert variant="success" duration="3000" closable>
    <ld-icon slot="icon" name="check2-circle"></ld-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </ld-alert>

  <ld-alert variant="neutral" duration="3000" closable>
    <ld-icon slot="icon" name="gear"></ld-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </ld-alert>

  <ld-alert variant="warning" duration="3000" closable>
    <ld-icon slot="icon" name="exclamation-triangle"></ld-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </ld-alert>

  <ld-alert variant="danger" duration="3000" closable>
    <ld-icon slot="icon" name="exclamation-octagon"></ld-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </ld-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`ld-button[variant="${variant}"]`);
    const alert = container.querySelector(`ld-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import { LdAlert, LdButton, LdIcon } from '@shoelace-style/leonardo/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <LdButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </LdButton>

      <LdButton variant="success" onClick={() => success.current.toast()}>
        Success
      </LdButton>

      <LdButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </LdButton>

      <LdButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </LdButton>

      <LdButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </LdButton>

      <LdAlert ref={primary} variant="primary" duration="3000" closable>
        <LdIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </LdAlert>

      <LdAlert ref={success} variant="success" duration="3000" closable>
        <LdIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </LdAlert>

      <LdAlert ref={neutral} variant="neutral" duration="3000" closable>
        <LdIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take affect on next login.
      </LdAlert>

      <LdAlert ref={warning} variant="warning" duration="3000" closable>
        <LdIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </LdAlert>

      <LdAlert ref={danger} variant="danger" duration="3000" closable>
        <LdIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </LdAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html:preview
<div class="alert-toast-wrapper">
  <ld-button variant="primary">Create Toast</ld-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('ld-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('ld-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <ld-icon name="${icon}" slot="icon"></ld-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.ld-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.ld-toast-stack {
  left: 0;
  right: auto;
}
```

:::tip
By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.
:::
