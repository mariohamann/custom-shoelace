---
meta:
  title: Dialog
  description: 'Dialogs, sometimes called "modals", appear above the page and require the user''s immediate attention.'
layout: component
---

<!-- cspell:dictionaries lorem-ipsum -->

```html:preview
<ld-dialog label="Dialog" class="dialog-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <ld-button slot="footer" variant="primary">Close</ld-button>
</ld-dialog>

<ld-button>Open Dialog</ld-button>

<script>
  const dialog = document.querySelector('.dialog-overview');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('ld-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { LdButton, LdDialog } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LdDialog label="Dialog" open={open} onLdAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <LdButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </LdButton>
      </LdDialog>

      <LdButton onClick={() => setOpen(true)}>Open Dialog</LdButton>
    </>
  );
};
```

## Examples

### Custom Width

Use the `--width` custom property to set the dialog's width.

```html:preview
<ld-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <ld-button slot="footer" variant="primary">Close</ld-button>
</ld-dialog>

<ld-button>Open Dialog</ld-button>

<script>
  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('ld-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdButton, LdDialog } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LdDialog label="Dialog" open={open} style={{ '--width': '50vw' }} onLdAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <LdButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </LdButton>
      </LdDialog>

      <LdButton onClick={() => setOpen(true)}>Open Dialog</LdButton>
    </>
  );
};
```

{% endraw %}

### Scrolling

By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.

```html:preview
<ld-dialog label="Dialog" class="dialog-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--ld-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <ld-button slot="footer" variant="primary">Close</ld-button>
</ld-dialog>

<ld-button>Open Dialog</ld-button>

<script>
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('ld-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { LdButton, LdDialog } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LdDialog label="Dialog" open={open} onLdAfterHide={() => setOpen(false)}>
        <div
          style={{
            height: '150vh',
            border: 'dashed 2px var(--ld-color-neutral-200)',
            padding: '0 1rem'
          }}
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>

        <LdButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </LdButton>
      </LdDialog>

      <LdButton onClick={() => setOpen(true)}>Open Dialog</LdButton>
    </>
  );
};
```

{% endraw %}

### Header Actions

The header shows a functional close button by default. You can use the `header-actions` slot to add additional [icon buttons](/components/icon-button) if needed.

```html:preview
<ld-dialog label="Dialog" class="dialog-header-actions">
  <ld-icon-button class="new-window" slot="header-actions" name="box-arrow-up-right"></ld-icon-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <ld-button slot="footer" variant="primary">Close</ld-button>
</ld-dialog>

<ld-button>Open Dialog</ld-button>

<script>
  const dialog = document.querySelector('.dialog-header-actions');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('ld-button[slot="footer"]');
  const newWindowButton = dialog.querySelector('.new-window');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
  newWindowButton.addEventListener('click', () => window.open(location.href));
</script>
```

```jsx:react
import { useState } from 'react';
import { LdButton, LdDialog, LdIconButton } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LdDialog label="Dialog" open={open} onLdAfterHide={() => setOpen(false)}>
        <LdIconButton
          class="new-window"
          slot="header-actions"
          name="box-arrow-up-right"
          onClick={() => window.open(location.href)}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <LdButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </LdButton>
      </LdDialog>

      <LdButton onClick={() => setOpen(true)}>Open Dialog</LdButton>
    </>
  );
};
```

### Preventing the Dialog from Closing

By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the [[Escape]] key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the dialog open in such cases, you can cancel the `ld-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or [[Escape]] to dismiss it.

```html:preview
<ld-dialog label="Dialog" class="dialog-deny-close">
  This dialog will not close when you click on the overlay.
  <ld-button slot="footer" variant="primary">Close</ld-button>
</ld-dialog>

<ld-button>Open Dialog</ld-button>

<script>
  const dialog = document.querySelector('.dialog-deny-close');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('ld-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  // Prevent the dialog from closing when the user clicks on the overlay
  dialog.addEventListener('ld-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { LdButton, LdDialog } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  // Prevent the dialog from closing when the user clicks on the overlay
  function handleRequestClose(event) {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  return (
    <>
      <LdDialog label="Dialog" open={open} onLdRequestClose={handleRequestClose} onLdAfterHide={() => setOpen(false)}>
        This dialog will not close when you click on the overlay.
        <LdButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </LdButton>
      </LdDialog>

      <LdButton onClick={() => setOpen(true)}>Open Dialog</LdButton>
    </>
  );
};
```

### Customizing Initial Focus

By default, the dialog's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the dialog. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

```html:preview
<ld-dialog label="Dialog" class="dialog-focus">
  <ld-input autofocus placeholder="I will have focus when the dialog is opened"></ld-input>
  <ld-button slot="footer" variant="primary">Close</ld-button>
</ld-dialog>

<ld-button>Open Dialog</ld-button>

<script>
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('ld-input');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('ld-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { LdButton, LdDialog, LdInput } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LdDialog label="Dialog" open={open} onLdAfterHide={() => setOpen(false)}>
        <LdInput autofocus placeholder="I will have focus when the dialog is opened" />
        <LdButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </LdButton>
      </LdDialog>

      <LdButton onClick={() => setOpen(true)}>Open Dialog</LdButton>
    </>
  );
};
```

:::tip
You can further customize initial focus behavior by canceling the `ld-initial-focus` event and setting focus yourself inside the event handler.
:::
