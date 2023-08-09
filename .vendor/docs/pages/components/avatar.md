---
meta:
  title: Avatar
  description: Avatars are used to represent a person or object.
layout: component
---

By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.

```html:preview
<ld-avatar label="User avatar"></ld-avatar>
```

```jsx:react
import { LdAvatar } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdAvatar label="User avatar" />;
```

## Examples

### Images

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.
Avatar images can be lazily loaded by setting the `loading` attribute to `lazy`.

```html:preview
<ld-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></ld-avatar>
<ld-avatar
  image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a white and grey kitten on grey textile"
  loading="lazy"
></ld-avatar>
```

```jsx:react
import { LdAvatar } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdAvatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  />
  <LdAvatar
    image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a white and grey kitten on grey textile"
    loading="lazy"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html:preview
<ld-avatar initials="SL" label="Avatar with initials: SL"></ld-avatar>
```

```jsx:react
import { LdAvatar } from '@shoelace-style/leonardo/dist/react';

const App = () => <LdAvatar initials="SL" label="Avatar with initials: SL" />;
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html:preview
<ld-avatar label="Avatar with an image icon">
  <ld-icon slot="icon" name="image"></ld-icon>
</ld-avatar>

<ld-avatar label="Avatar with an archive icon">
  <ld-icon slot="icon" name="archive"></ld-icon>
</ld-avatar>

<ld-avatar label="Avatar with a briefcase icon">
  <ld-icon slot="icon" name="briefcase"></ld-icon>
</ld-avatar>
```

```jsx:react
import { LdAvatar, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdAvatar label="Avatar with an image icon">
      <LdIcon slot="icon" name="image" />
    </LdAvatar>

    <LdAvatar label="Avatar with an archive icon">
      <LdIcon slot="icon" name="archive" />
    </LdAvatar>

    <LdAvatar label="Avatar with a briefcase icon">
      <LdIcon slot="icon" name="briefcase" />
    </LdAvatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html:preview
<ld-avatar shape="square" label="Square avatar"></ld-avatar>
<ld-avatar shape="rounded" label="Rounded avatar"></ld-avatar>
<ld-avatar shape="circle" label="Circle avatar"></ld-avatar>
```

```jsx:react
import { LdAvatar, LdIcon } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <>
    <LdAvatar shape="square" label="Square avatar" />
    <LdAvatar shape="rounded" label="Rounded avatar" />
    <LdAvatar shape="circle" label="Circle avatar" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html:preview
<div class="avatar-group">
  <ld-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="Avatar 1 of 4"
  ></ld-avatar>

  <ld-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 2 of 4"
  ></ld-avatar>

  <ld-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 3 of 4"
  ></ld-avatar>

  <ld-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="Avatar 4 of 4"
  ></ld-avatar>
</div>

<style>
  .avatar-group ld-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group ld-avatar::part(base) {
    border: solid 2px var(--ld-color-neutral-0);
  }
</style>
```

```jsx:react
import { LdAvatar, LdIcon } from '@shoelace-style/leonardo/dist/react';

const css = `
  .avatar-group ld-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group ld-avatar::part(base) {
    border: solid 2px var(--ld-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <LdAvatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <LdAvatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <LdAvatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <LdAvatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```
