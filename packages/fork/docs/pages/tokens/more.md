---
meta:
  title: More Design Tokens
  description: Additional design tokens can be found here.
---

# More Design Tokens

All of the design tokens described herein are considered relatively stable. However, some changes might occur in future versions to address mission critical bugs or improvements. If such changes occur, they _will not_ be considered breaking changes and will be clearly documented in the [changelog](/resources/changelog).

Most design tokens are consistent across the light and dark theme. Those that vary will show both values.

:::tip
Currently, the source of design tokens is considered to be [`light.css`](https://github.com/leonardo-design-system/leonardo/blob/next/src/themes/light.css). The dark theme, [dark.css](https://github.com/leonardo-design-system/leonardo/blob/next/src/themes/dark.css), mirrors all of the same tokens with dark mode-specific values where appropriate. Work is planned to move all design tokens to a single file, perhaps JSON or YAML, in the near future.
:::

## Focus Rings

Focus ring tokens control the appearance of focus rings. Note that form inputs use `--ld-input-focus-ring-*` tokens instead.

| Token                    | Value                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `--ld-focus-ring-color`  | `var(--ld-color-primary-600)` (light theme)<br>`var(--ld-color-primary-700)` (dark theme) |
| `--ld-focus-ring-style`  | `solid`                                                                                   |
| `--ld-focus-ring-width`  | `3px`                                                                                     |
| `--ld-focus-ring`        | `var(--ld-focus-ring-style) var(--ld-focus-ring-width) var(--ld-focus-ring-color)`        |
| `--ld-focus-ring-offset` | `1px`                                                                                     |

## Buttons

Button tokens control the appearance of buttons. In addition, buttons also currently use some form input tokens such as `--ld-input-height-*` and `--ld-input-border-*`. More button tokens may be added in the future to make it easier to style them more independently.

| Token                          | Value                         |
| ------------------------------ | ----------------------------- |
| `--ld-button-font-size-small`  | `var(--ld-font-size-x-small)` |
| `--ld-button-font-size-medium` | `var(--ld-font-size-small)`   |
| `--ld-button-font-size-large`  | `var(--ld-font-size-medium)`  |

## Form Inputs

Form input tokens control the appearance of form controls such as [input](/components/input), [select](/components/select), [textarea](/components/textarea), etc.

| Token                                   | Value                              |
| --------------------------------------- | ---------------------------------- |
| `--ld-input-height-small`               | `1.875rem` (30px @ 16px base)      |
| `--ld-input-height-medium`              | `2.5rem` (40px @ 16px base)        |
| `--ld-input-height-large`               | `3.125rem` (50px @ 16px base)      |
| `--ld-input-background-color`           | `var(--ld-color-neutral-0)`        |
| `--ld-input-background-color-hover`     | `var(--ld-input-background-color)` |
| `--ld-input-background-color-focus`     | `var(--ld-input-background-color)` |
| `--ld-input-background-color-disabled`  | `var(--ld-color-neutral-100)`      |
| `--ld-input-border-color`               | `var(--ld-color-neutral-300)`      |
| `--ld-input-border-color-hover`         | `var(--ld-color-neutral-400)`      |
| `--ld-input-border-color-focus`         | `var(--ld-color-primary-500)`      |
| `--ld-input-border-color-disabled`      | `var(--ld-color-neutral-300)`      |
| `--ld-input-border-width`               | `1px`                              |
| `--ld-input-required-content`           | `*`                                |
| `--ld-input-required-content-offset`    | `-2px`                             |
| `--ld-input-required-content-color`     | `var(--ld-input-label-color)`      |
| `--ld-input-border-radius-small`        | `var(--ld-border-radius-medium)`   |
| `--ld-input-border-radius-medium`       | `var(--ld-border-radius-medium)`   |
| `--ld-input-border-radius-large`        | `var(--ld-border-radius-medium)`   |
| `--ld-input-font-family`                | `var(--ld-font-sans)`              |
| `--ld-input-font-weight`                | `var(--ld-font-weight-normal)`     |
| `--ld-input-font-size-small`            | `var(--ld-font-size-small)`        |
| `--ld-input-font-size-medium`           | `var(--ld-font-size-medium)`       |
| `--ld-input-font-size-large`            | `var(--ld-font-size-large)`        |
| `--ld-input-letter-spacing`             | `var(--ld-letter-spacing-normal)`  |
| `--ld-input-color`                      | `var(--ld-color-neutral-700)`      |
| `--ld-input-color-hover`                | `var(--ld-color-neutral-700)`      |
| `--ld-input-color-focus`                | `var(--ld-color-neutral-700)`      |
| `--ld-input-color-disabled`             | `var(--ld-color-neutral-900)`      |
| `--ld-input-icon-color`                 | `var(--ld-color-neutral-500)`      |
| `--ld-input-icon-color-hover`           | `var(--ld-color-neutral-600)`      |
| `--ld-input-icon-color-focus`           | `var(--ld-color-neutral-600)`      |
| `--ld-input-placeholder-color`          | `var(--ld-color-neutral-500)`      |
| `--ld-input-placeholder-color-disabled` | `var(--ld-color-neutral-600)`      |
| `--ld-input-spacing-small`              | `var(--ld-spacing-small)`          |
| `--ld-input-spacing-medium`             | `var(--ld-spacing-medium)`         |
| `--ld-input-spacing-large`              | `var(--ld-spacing-large)`          |
| `--ld-input-focus-ring-color`           | `hsl(198.6 88.7% 48.4% / 40%)`     |
| `--ld-input-focus-ring-offset`          | `0`                                |

## Filled Form Inputs

Filled form input tokens control the appearance of form controls using the `filled` variant.

| Token                                         | Value                         |
| --------------------------------------------- | ----------------------------- |
| `--ld-input-filled-background-color`          | `var(--ld-color-neutral-100)` |
| `--ld-input-filled-background-color-hover`    | `var(--ld-color-neutral-100)` |
| `--ld-input-filled-background-color-focus`    | `var(--ld-color-neutral-100)` |
| `--ld-input-filled-background-color-disabled` | `var(--ld-color-neutral-100)` |
| `--ld-input-filled-color`                     | `var(--ld-color-neutral-800)` |
| `--ld-input-filled-color-hover`               | `var(--ld-color-neutral-800)` |
| `--ld-input-filled-color-focus`               | `var(--ld-color-neutral-700)` |
| `--ld-input-filled-color-disabled`            | `var(--ld-color-neutral-800)` |

## Form Labels

Form label tokens control the appearance of labels in form controls.

| Token                               | Value                        |
| ----------------------------------- | ---------------------------- |
| `--ld-input-label-font-size-small`  | `var(--ld-font-size-small)`  |
| `--ld-input-label-font-size-medium` | `var(--ld-font-size-medium`) |
| `--ld-input-label-font-size-large`  | `var(--ld-font-size-large)`  |
| `--ld-input-label-color`            | `inherit`                    |

## Help Text

Help text tokens control the appearance of help text in form controls.

| Token                                   | Value                         |
| --------------------------------------- | ----------------------------- |
| `--ld-input-help-text-font-size-small`  | `var(--ld-font-size-x-small)` |
| `--ld-input-help-text-font-size-medium` | `var(--ld-font-size-small)`   |
| `--ld-input-help-text-font-size-large`  | `var(--ld-font-size-medium)`  |
| `--ld-input-help-text-color`            | `var(--ld-color-neutral-500)` |

## Toggles

Toggle tokens control the appearance of toggles such as [checkbox](/components/checkbox), [radio](/components/radio), [switch](/components/switch), etc.

| Token                     | Value                         |
| ------------------------- | ----------------------------- |
| `--ld-toggle-size-small`  | `0.875rem` (14px @ 16px base) |
| `--ld-toggle-size-medium` | `1.125rem` (18px @ 16px base) |
| `--ld-toggle-size-large`  | `1.375rem` (22px @ 16px base) |

## Overlays

Overlay tokens control the appearance of overlays as used in [dialog](/components/dialog), [drawer](/components/drawer), etc.

| Token                           | Value                       |
| ------------------------------- | --------------------------- |
| `--ld-overlay-background-color` | `hsl(240 3.8% 46.1% / 33%)` |

## Panels

Panel tokens control the appearance of panels such as those used in [dialog](/components/dialog), [drawer](/components/drawer), [menu](/components/menu), etc.

| Token                         | Value                         |
| ----------------------------- | ----------------------------- |
| `--ld-panel-background-color` | `var(--ld-color-neutral-0)`   |
| `--ld-panel-border-color`     | `var(--ld-color-neutral-200)` |
| `--ld-panel-border-width`     | `1px`                         |

## Tooltips

Tooltip tokens control the appearance of tooltips. This includes the [tooltip](/components/tooltip) component as well as other implementations, such [range tooltips](/components/range).

| Token                           | Value                                                  |
| ------------------------------- | ------------------------------------------------------ |
| `--ld-tooltip-border-radius`    | `var(--ld-border-radius-medium)`                       |
| `--ld-tooltip-background-color` | `var(--ld-color-neutral-800)`                          |
| `--ld-tooltip-color`            | `var(--ld-color-neutral-0)`                            |
| `--ld-tooltip-font-family`      | `var(--ld-font-sans)`                                  |
| `--ld-tooltip-font-weight`      | `var(--ld-font-weight-normal)`                         |
| `--ld-tooltip-font-size`        | `var(--ld-font-size-small)`                            |
| `--ld-tooltip-line-height`      | `var(--ld-line-height-dense)`                          |
| `--ld-tooltip-padding`          | `var(--ld-spacing-2x-small) var(--ld-spacing-x-small)` |
| `--ld-tooltip-arrow-size`       | `6px`                                                  |
