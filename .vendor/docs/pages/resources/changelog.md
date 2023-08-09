---
meta:
  title: Changelog
  description: Changes to each version of the project are documented here.
---

# Changelog

Leonardo follows [Semantic Versioning](https://semver.org/). Breaking changes in components with the <ld-badge variant="primary" pill>Stable</ld-badge> badge will not be accepted until the next major version. As such, all contributions must consider the project's roadmap and take this into consideration. Features that are deemed no longer necessary will be deprecated but not removed.

Components with the <ld-badge variant="warning" pill>Experimental</ld-badge> badge should not be used in production. They are made available as release candidates for development and testing purposes. As such, changes to experimental components will not be subject to semantic versioning.

New versions of Leonardo are released as-needed and generally occur when a critical mass of changes have accumulated. At any time, you can see what's coming in the next release by visiting [next.leonardo.style](https://next.leonardo.style).

## 2.6.0

- Added JSDoc comments to React Wrappers for better documentation when hovering a component. [#1450]
- Added `displayName` to React Wrappers for better debugging. [#1450]
- Added non-auto-registering routes for Components to fix a number of issues around auto-registration. [#1450]
- Added a console warning if you attempt to register the same Leonardo component twice. [#1450]
- Added tests for `<ld-qr-code>` [#1416]
- Added support for pressing [[Space]] to select/toggle selected `<ld-menu-item>` elements [#1429]
- Added support for virtual elements in `<ld-popup>` [#1449]
- Added the `spinner` part to `<ld-button>` [#1460]
- Added a `leonardo.js` and `leonardo-autoloader.js` to exportmaps. [#1450]
- Added types to events emitted by React wrapped components [#1419]
- Fixed React component treeshaking by introducing `sideEffects` key in `package.json`. [#1450]
- Fixed a bug in `<ld-tree>` where it was auto-defining `<ld-tree-item>`. [#1450]
- Fixed a bug in focus trapping of modal elements like `<ld-dialog>`. We now manually handle focus ordering as well as added `offsetParent()` check for tabbable boundaries in Safari. Test cases added for `<ld-dialog>` inside a shadowRoot [#1403]
- Fixed a bug in `valueAsDate` on `<ld-input>` where it would always set `type="date"` for the underlying `<input>` element. It now falls back to the native browser implementation for the in-memory input. This may cause unexpected behavior if you're using `valueAsDate` on any input elements that aren't `type="date"`. [#1399]
- Fixed a bug in `<ld-qr-code>` where the `background` attribute was never passed to the QR code [#1416]
- Fixed a bug in `<ld-dropdown>` where aria attributes were incorrectly applied to the default `<slot>` causing Lighthouse errors [#1417]
- Fixed a bug in `<ld-carousel>` that caused navigation to work incorrectly in some case [#1420]
- Fixed a number of slots that incorrectly had aria- and/or role attributes directly on them [#1422]
- Fixed a bug in `<ld-tree>` that caused focus to be stolen when removing focused tree items [#1430]
- Fixed a bug in `<ld-dialog>` and `<ld-drawer>` that caused nested modals to respond too eagerly to the [[Esc]] key [#1457]
- Improved `<ld-details>` to use `<details>` internally for better semantics and to enable search to find in supportive browsers when collapsed [#1470]
- Updated ESLint and related plugins to the latest versions
- Changed the default entrypoint for jsDelivr to point to the autoloader. [#1450]

## 2.5.2

- Fixed broken source buttons in the docs [#1401]

## 2.5.1

- Fixed missing extensions from imports that broke with TypeScript 5 [#1391]
- Fixed a regression that caused slotted styles to not work in `<ld-select>` [#1387]
- Reimplemented the theme switcher so it supports light, dark, and system (auto) in the docs [#1395]

## 2.5.0

This release [unbundles Lit](https://github.com/leonardo-design-system/leonardo/issues/559) (and other dependencies) from Leonardo. There are now two distributions for the project:

1. `cdn/` – a bundled, CDN-ready distribution
2. `dist/` – an unbundled, npm-ready distribution

:::warning
If you're a CDN user, you must update your path to point to `cdn/` instead of `dist/`. You can copy and paste the latest paths from the [installation page](/getting-started/installation).
:::

- Added a `cdn/` distribution for bundled dependencies (imports for npm users remain the same) [#1369]
- Added the `checkbox` part and related exported parts to `<ld-tree-item>` so you can target it with CSS [#1318]
- Added the `submenu-icon` part to `<ld-menu-item>` (submenus have not been implemented yet, but this part is required to allow customizations)
- Added the ability to use Sprite Sheets when using `<ld-icon>` via a custom resolver.
- Added tests for `<ld-split-panel>` [#1343]
- Fixed a bug where changing the size of `<ld-radio-group>` wouldn't update the size of child elements
- Fixed a bug in `<ld-select>` and `<ld-color-picker>` where the `size` attribute wasn't being reflected [#1318]
- Fixed a bug in `<ld-radio-group>` where `<ld-radio>` would not get checked if `<ld-radio-group>` was defined first. [#1364]
- Fixed a bug in `<ld-input>` that caused date pickers to look filled in even when empty in Safari [#1341]
- Fixed a bug in `<ld-radio-group>` that sometimes caused dual scrollbars in containers that overflowed [#1380]
- Fixed a bug in `<ld-carousel>` not loading the English language pack automatically. [#1384]
- Improved `<ld-button>` so it can accept children of variable heights [#1317]
- Improved the docs to more clearly explain sizing radios and radio buttons
- Improved the performance of `<ld-rating>` by partially rendering unseen icons [#1310]
- Improved the Portuguese translation [#1336]
- Improved the German translation [#1339]
- Improved the autoloader so it watches `<html>` instead of `<body>` since the latter gets replaced by some frameworks [#1338]
- Improved the Rails documentation [#1258]
- Replaced Docsify with Eleventy to generate a static HTML version of the docs
- Updated esbuild to 0.18.2
- Updated Lit to 2.7.5
- Updated TypeScript to 5.1.3

## 2.4.0

- Added the `discover()` function to the experimental autoloader's exports [#1236]
- Added the `size` attribute to `<ld-radio-group>` so labels and controls will be sized consistently [#1301]
- Added tests for `<ld-animated-image>` [#1246]
- Added tests for `<ld-animation>` [#1274]
- Fixed a bug in `<ld-tree-item>` that prevented long labels from wrapping [#1243]
- Fixed a bug in `<ld-tree-item>` that caused labels to be misaligned when text wraps [#1244]
- Fixed an incorrect CSS property value in `<ld-checkbox>` [#1272]
- Fixed a bug in `<ld-avatar>` that caused the initials to show up behind images with transparency [#1260]
- Fixed a bug in `<ld-split-panel>` that prevented the divider from being focusable in some browsers [#1288]
- Fixed a bug that caused `<ld-tab-group>` to affect scrolling when initializing [#1292]
- Fixed a bug in `<ld-menu-item>` that allowed the hover state to show when focused [#1282]
- Fixed a bug in `<ld-carousel>` that prevented interactive elements from receiving clicks [#1262]
- Fixed a bug in `<ld-input>` that caused `valueAsDate` and `valueAsNumber` to not be set synchronously in some cases [#1302]
- Improved the behavior of `<ld-carousel>` when used inside a flex container [#1235]
- Improved the behavior of `<ld-tree-item>` to support buttons and other interactive elements [#1234]
- Improved the performance of `<ld-include>` to prevent an apparent memory leak in some browsers [#1284]
- Improved the accessibility of `<ld-select>`, `<ld-split-panel>`, and `<ld-details>` by ensuring slots don't have roles [#1287]

## 2.3.0

- Added an experimental autoloader
- Added the `subpath` argument to `getBasePath()` to make it easier to generate full paths to any file
- Added `custom-elements.json` to package exports
- Added `tag__base`, `tag__content`, `tag__remove-button`, `tag__remove-button__base` parts to `<ld-select>`
- Fixed a bug in `<ld-rating>` that allowed the `ld-change` event to be emitted when disabled [#1220]
- Fixed a regression in `<ld-input>` that caused `min` and `max` to stop working when `type="date"` [#1224]
- Improved accessibility of `<ld-carousel>` [#1218]
- Improved `<ld-option>` so it converts non-string values to strings for convenience [#1226]
- Updated the docs to dogfood the autoloader

## 2.2.0

- Added TypeScript types to all custom events [#1183]
- Added the `svg` part to `<ld-icon>`
- Added the `getForm()` method to all form controls [#1180]
- Added the experimental carousel component [#851]
- Fixed a bug in `<ld-select>` that caused the display label to render incorrectly in Chrome after form validation [#1197]
- Fixed a bug in `<ld-input>` that prevented users from applying their own value for `autocapitalize`, `autocomplete`, and `autocorrect` when using `type="password` [#1205]
- Fixed a bug in `<ld-tab-group>` that prevented scroll controls from showing when dynamically adding tabs [#1208]
- Fixed a bug in `<ld-input>` that caused the calendar icon to be clipped in Firefox [#1213]
- Fixed a bug in `<ld-tab>` that caused `ld-tab-show` to be emitted when activating the close button
- Fixed a bug in `<ld-spinner>` that caused `--track-color` to be invisible with certain colors
- Fixed a bug in `<ld-menu-item>` that caused the focus color to show when selecting menu items with a mouse or touch device
- Fixed a bug in `<ld-select>` that caused `ld-change` and `ld-input` to be emitted too early [#1201]
- Fixed a positioning edge case that caused `<ld-popup>` to positioned nested popups incorrectly [#1135]
- Fixed a bug in `<ld-tree>` that caused the tree item to collapse when clicking a child item, dragging the mouse, and releasing it on the parent node [#1082]
- Updated `@shoelace-style/localize` to 3.1.0
- Updated `@floating-ui/dom` to 1.2.1

When using `<input type="password">` the default value for `autocapitalize`, `autocomplete`, and `autocorrect` may be affected due to the bug fixed in [#1205]restore the previous behavior.

## 2.1.0

- Added the `ld-focus` and `ld-blur` events to `<ld-color-picker>`
- Added the `focus()` and `blur()` methods to `<ld-color-picker>`
- Added the `ld-invalid` event to all form controls to enable custom validation logic [#1167]
- Added `validity` and `validationMessage` properties to all form controls [#1167]
- Added the `rel` attribute to `<ld-button>` to allow users to create button links that point to specific targets [#1200]
- Fixed a bug in `<ld-animated-image>` where the play and pause buttons were transposed [#1147]
- Fixed a bug that prevented `web-types.json` from being generated [#1154]
- Fixed a bug in `<ld-color-picker>` that prevented `ld-change` and `ld-input` from emitting when using the eye dropper [#1157]
- Fixed a bug in `<ld-dropdown>` that prevented keyboard users from selecting menu items when using the keyboard [#1165]
- Fixed a bug in the template for `<ld-select>` that caused the `form-control-help-text` part to not be in the same location as other form controls [#1178]
- Fixed a bug in `<ld-checkbox>` and `<ld-switch>` that caused the browser to scroll incorrectly when focusing on a control in a container with overflow [#1169]
- Fixed a bug in `<ld-menu-item>` that caused the `click` event to be emitted when the item was disabled [#1113]
- Fixed a bug in form controls that erroneously prevented validation states from being set when `novalidate` was used on the containing form [#1164]
- Fixed a bug in `<ld-checkbox>` that caused the required asterisk to appear before the label in Chrome
- Fixed a bug that prevented large form control labels from having the correct font size [#1195]
- Improved the behavior of `<ld-dropdown>` in Safari so keyboard interaction works the same as in other browsers [#1177]
- Improved the [icons](/components/icon) page so it's not as sluggish in Safari [#1122]
- Improved the accessibility of `<ld-switch>` when used in forced-colors / Windows High Contrast mode [#1114]
- Improved user interaction heuristics for all form controls [#1175]

## 2.0.0

This is the first stable release of Leonardo 2, meaning breaking changes to the API will no longer be accepted for this version. Development of Leonardo 2.0 started in January 2020. The first beta was released on [July 15, 2020](https://github.com/leonardo-design-system/leonardo/releases/tag/v2.0.0-beta.1). Since then, Leonardo has grown quite a bit! Here are some stats from the project as of January 24, 2023:

- 55 components have been built
- [Over 2,500 commits](https://github.com/leonardo-design-system/leonardo/commits/next) have been made to the project
- [88 beta versions](https://github.com/leonardo-design-system/leonardo/tags) have been released
- [85 people](https://github.com/leonardo-design-system/leonardo/graphs/contributors) have contributed to the project
- [669 issues](https://github.com/leonardo-design-system/leonardo/issues?q=is%3Aissue+is%3Aclosed) have been filed on GitHub
- [274 pull requests](https://github.com/leonardo-design-system/leonardo/pulls) have been opened
- [More than 150 discussions](https://github.com/leonardo-design-system/leonardo/discussions) have been started on GitHub
- [Over 500 people](https://discord.com/invite/mg8f26C) have joined the Leonardo community on Discord
- [Over 300 million CDN hits](https://www.jsdelivr.com/package/npm/@shoelace-style/leonardo) per month
- [Over 13,000 npm downloads](https://www.npmjs.com/package/@shoelace-style/leonardo) per week
- [73rd most popular project](https://www.jsdelivr.com/statistics) on jsDelivr
- [#2

I'd like to extend a very special thank you to every single contributor who worked to make this possible. Everyone who's filed a bug, submitted a PR, requested a feature, started a discussion, helped with testing, and advocated for the project. You are just as responsible for Leonardo's success as I am. I'd also like to thank the folks at [Font&nbsp;Awesome](https://fontawesome.com/) for recognizing Leonardo's potential and [believing in me](https://blog.fontawesome.com/leonardo-joins-font-awesome/) to make it happen.

Thank you! And keep building _awesome_ stuff!

Without further ado, here are the notes for this release.

- Added support for the `inert` attribute on `<ld-menu-item>` to allow hidden menu items to not accept focus [#1107]
- Added the `tag` part to `<ld-select>`
- Added `ld-hover` event to `<ld-rating>` [#1125]
- Added the `@documentation` tag with a link to the docs for each component
- Added the `form` attribute to all form controls to allow placing them outside of a `<form>` element [#1130]
- Added the `getFormControls()` function as an alternative to `HTMLFormElement.elements`
- Added missing docs for the `header-actions` slot in `<ld-dialog>` and `<ld-drawer>`
- Added `hue-slider-handle` and `opacity-slider-handle` parts to `<ld-color-picker>` and correct other part names in the docs [#1142]
- Fixed a bug in `<ld-select>` that prevented placeholders from showing when `multiple` was used [#1109]
- Fixed a bug in `<ld-select>` that caused tags to not be rounded when using the `pill` attribute [#1117]
- Fixed a bug in `<ld-select>` where the `ld-change` and `ld-input` events didn't weren't emitted when removing tags [#1119]
- Fixed a bug in `<ld-select>` that caused the listbox to scroll to the first selected item when selecting multiple items [#1138]
- Fixed a bug in `<ld-select>` where the input color and input hover color wasn't using the correct design tokens [#1143]
- Fixed a bug in `<ld-color-picker>` that logged a console error when parsing swatches with whitespace
- Fixed a bug in `<ld-color-picker>` that caused selected colors to be wrong due to incorrect HSV calculations
- Fixed a bug in `<ld-color-picker>` that prevented the initial value from being set correct when assigned as a property [#1141]
- Fixed a bug in `<ld-radio-button>` that caused the checked button's right border to be incorrect [#1110]
- Fixed a bug in `<ld-spinner>` that caused the animation to stop working correctly in Safari [#1121]
- Fixed a bug that prevented the entire `<ld-tab-panel>` to be hidden when inactive
- Fixed a bug that caused the value of `<ld-radio-group>` to be `undefined` depending on where the radio was activated [#1134]
- Fixed a bug that caused body content to shift when scroll locking was enabled [#1132]
- Fixed a bug in `<ld-icon>` that caused icons to sometimes be clipped in Safari
- Fixed a bug that prevented label colors from inheriting by default in `<ld-checkbox>`, `<ld-radio>`, and `<ld-switch>`
- Fixed a bug in `<ld-radio-group>` that caused an extra margin between the host element and the internal fieldset [#1139]
- Refactored the `LeonardoFormControl` interface to remove the `invalid` property, allowing a more intuitive API for controlling validation internally
- Renamed the internal `FormSubmitController` to `FormControlController` to better reflect what it's used for
- Updated Lit to 2.6.1
- Updated Floating UI to 1.1.0
- Updated all other dependencies to latest versions

## 2.0.0-beta.88

This release includes a complete rewrite of `<ld-select>` to improve accessibility and simplify its internals.

- 🚨 BREAKING: rewrote `<ld-select>`
  - Accessibility has been significantly improved, especially in screen readers
  - You must use `<ld-option>` instead of `<ld-menu-item>` for options now
  - The `suffix` slot was removed because it was confusing to users and its position made the clear button inaccessible
  - The `max-tags-visible` attribute has been renamed to `max-options-visible`
  - Many parts have been removed or renamed (please see the docs for more details)
- 🚨 BREAKING: removed the `ld-label-change` event from `<ld-menu-item>` (listen for `slotchange` instead)
- 🚨 BREAKING: removed type to select logic from `<ld-menu>` (this was added specifically for `<ld-select>` which no longer uses `<ld-menu>`)
- 🚨 BREAKING: swatches in `<ld-color-picker>` are no longer present by default (but you can set them using the `swatches` attribute now)
- 🚨 BREAKING: improved the accessibility of `<ld-menu-item>` so checked items are announced as such
  - Checkbox menu items must now have `type="checkbox"` before applying the `checked` attribute
  - Checkbox menu items will now toggle their `checked` state on their own when selected
  - Disabled menu items will now receive focus, but are still not selectable
- Added the `<ld-option>` component
- Added Traditional Chinese translation [#1086]
- Added support for `swatches` to be an attribute of `<ld-color-picker>` so swatches can be defined declaratively (it was previously a property; use a `;` to separate color values)
- Fixed a bug in `<ld-tree-item>` where the checked/indeterminate states could get out of sync when using the `multiple` option [#1076]
- Fixed a bug in `<ld-tree>` that caused `ld-selection-change` to emit before the DOM updated [#1096]
- Fixed a bug that prevented `<ld-switch>` from submitting a default value of `on` when no value was provided [#1103]
- Fixed a bug in `<ld-textarea>` that caused the scrollbar to show sometimes when using `resize="auto"`
- Fixed a bug in `<ld-input>` and `<ld-textarea>` that caused its validation states to be out of sync in some cases [#1063]
- Reorganized all components to make class structures more consistent
- Updated some incorrect default values for design tokens in the docs [#1097]
- Updated non-public fields to use the `private` keyword (these were previously private only by convention, but now TypeScript will warn you)
- Updated the hover style of `<ld-menu-item>` to be consistent with `<ld-option>`
- Updated the status of `<ld-tree>` and `<ld-tree-item>` from experimental to stable
- Updated React wrappers to use the latest API from `@lit-labs/react` [#1090]
- Updated Bootstrap Icons to 1.10.3

## 2.0.0-beta.87

- 🚨 BREAKING: changed the default size of medium checkboxes, radios, and switches to 18px instead of 16px
- 🚨 BREAKING: renamed the `--ld-toggle-size` design token to `--ld-toggle-size-medium`
- Added the `--ld-toggle-size-small` and `--ld-toggle-size-large` design tokens
- Added the `size` attribute to `<ld-checkbox>`, `<ld-radio>`, and `<ld-switch>` [#1071]
- Added the `ld-input` event to `<ld-checkbox>`, `<ld-color-picker>`, `<ld-radio>`, `<ld-range>`, and `<ld-switch>`
- Added HSV format to `<ld-color-picker>` [#1072]
- Fixed a bug in `<ld-color-picker>` that sometimes prevented the color from updating when clicking or tapping on the controls
- Fixed a bug in `<ld-color-picker>` that prevented text from being entered in the color input
- Fixed a bug in `<ld-input>` that caused the `ld-change` event to be incorrectly emitted when the value was set programmatically [#917]
- Fixed a bug in `<ld-input>` and `<ld-textarea>` that made it impossible to disable spell checking [#1061]
- Fixed non-modal behaviors in `<ld-drawer>` when using the `contained` attribute [#1051]
- Fixed a bug in `<ld-checkbox>` and `<ld-radio>` that caused the checked icons to not scale property when resized
- Fixed a bug that broke React imports [#1050]
- Refactored `<ld-color-picker>` to use `@ctrl/tinycolor` instead of `color` saving ~67KB [#1072]
- Removed the `formdata` event polyfill since it's now available in the last two versions of all major browsers

## 2.0.0-beta.86

- 🚨 BREAKING: changed the default value of `date` in `<ld-relative-time>` to the current date instead of the Unix epoch
- 🚨 BREAKING: removed the `handle-icon` part and slot from `<ld-image-comparer>` (use `handle` instead)
- 🚨 BREAKING: removed the `handle` slot from `<ld-split-panel>` (use the `divider` slot instead)
- 🚨 BREAKING: removed the `--box-shadow` custom property from `<ld-alert>` (apply a box shadow to `::part(base)` instead)
- 🚨 BREAKING: removed the `play-icon` and `pause-icon` parts (use the `play-icon` and `pause-icon` slots instead)
- Added `header-actions` slot to `<ld-dialog>` and `<ld-drawer>`
- Added the `expand-icon` and `collapse-icon` slots to `<ld-details>` and refactored the icon animation [#1046]
- Added the `play-icon` and `pause-icon` slots to `<ld-animated-image>` so you can customize the default icons
- Converted `isTreeItem()` export to a static method of `<ld-tree-item>`
- Fixed a bug in `<ld-tree-item>` where `ld-selection-change` was emitted when the selection didn't change [#1030]
- Fixed a bug in `<ld-button-group>` that caused the border to render incorrectly when hovering over icons inside buttons [#1035]
- Fixed an incorrect default for `flip-fallback-strategy` in `<ld-popup>` that caused the fallback strategy to be `initial` instead of `best-fit`, which is inconsistent with Floating UI's default [#1036]
- Fixed a bug where browser validation tooltips would show up when hovering over form controls [#1037]
- Fixed a bug in `<ld-tab-group>` that sometimes caused the active tab indicator to not animate
- Fixed a bug in `<ld-tree-item>` that caused the expand/collapse icon slot to be out of sync when the node is open initially
- Fixed the mislabeled `handle-icon` slot in `<ld-image-comparer>` (it now points to the `<slot>`, not the slot's fallback content)
- Fixed the border radius in `<ld-dropdown>` so it matches with nested `<ld-menu>` elements
- Fixed a bug that caused all button values to appear in submitted form data even if they weren't the submitter
- Improved IntelliSense in VS Code, courtesy of [Burton's amazing CEM Analyzer plugin](https://github.com/break-stuff/cem-plugin-vs-code-custom-data-generator)
- Improved accessibility of `<ld-alert>` so the alert is announced and the close button has a label
- Improved accessibility of `<ld-progress-ring>` so slotted labels are announced along with visually hidden labels
- Refactored all styles and animations to use `translate`, `rotate`, and `scale` instead of `transform`
- Removed slot wrappers from many components, allowing better control over user-applied styles
- Removed unused aria attributes from `<ld-skeleton>`
- Replaced the `x` icon in the system icon library with `x-lg` to improve icon consistency

## 2.0.0-beta.85

- Fixed a bug in `<ld-dropdown>` that caused containing dialogs, drawers, etc. to close when pressing [[Escape]] while focused [#1024]
- Fixed a bug in `<ld-tree-item>` that allowed lazy nodes to be incorrectly selected [#1023]
- Fixed a typing bug in `<ld-tree-item>` [#1026]
- Updated Floating UI to 1.0.7 to fix a bug that prevented `hoist` from working correctly in `<ld-dropdown>` after a recent update [#1024]

## 2.0.0-beta.84

- 🚨 BREAKING: Removed the `fieldset` property from `<ld-radio-group>` (use CSS parts if you want to keep the border) [#965]
- 🚨 BREAKING: Removed `base` and `label` parts from `<ld-radio-group>` (use `form-control` and `form-control__label` instead) [#965]
- 🚨 BREAKING: Removed the `base` part from `<ld-icon>` (style the host element directly instead)
- 🚨 BREAKING: Removed the `invalid` attribute from form controls (use `[data-invalid]` to target it with CSS)
- Added validation states to all form controls to allow styling based on various validation states [#1011]
  - `data-required` - indicates that a value is required
  - `data-optional` - indicates that a value is NOT required
  - `data-invalid` - indicates that the form control is invalid
  - `data-valid` - indicates that the form control is valid
  - `data-user-invalid` - indicates the form control is invalid and the user has interacted with it
  - `data-user-valid` - indicates the form control is valid and the user has interacted with it
- Added npm exports [#1020]
- Added `checkValidity()` method to all form controls
- Added `reportValidity()` method to `<ld-range>`
- Added `button--checked` to `<ld-radio-button>` and `control--checked` to `<ld-radio>` to style just the checked state [#933]
- Added tests for `<ld-menu>`, `<ld-menu-item>`, `<ld-menu-label>`, `<ld-rating>`, `<ld-relative-time>`, `<ld-skeleton>`, `<ld-tab-panel>` and `<ld-tag>` [#935]
  [#949]
  [#956]
- Added translations for Hungarian, Turkish, English (United Kingdom) and German (Austria) [#982]
- Added `--indicator-transition-duration` custom property to `<ld-progress-ring>` [#986]
- Added `--ld-input-required-content-color` custom property to all form controls [#948]
- Added the ability to cancel `ld-show` and `ld-hide` events in `<ld-details>` [#993]
- Added `focus()` and `blur()` methods to `<ld-radio-button>`
- Added `stepUp()` and `stepDown()` methods to `<ld-input>` and `<ld-range>` [#1013]
- Added `showPicker()` method to `<ld-input>` [#1013]
- Added the `handle-icon` part to `<ld-image-comparer>`
- Added `caret`, `check`, `grip-vertical`, `indeterminate`, and `radio` icons to the system library and removed `check-lg` [#985]
- Added the `loading` attribute to `<ld-avatar>` to allow lazy loading of image avatars [#1006]
- Added `formenctype` attribute to `<ld-button>` [#1009]
- Added `exports` to `package.json` and removed the `main` and `module` properties [#1007]
- Fixed a bug in `<ld-card>` that prevented the border radius to apply correctly to the header [#934]
- Fixed a bug in `<ld-button-group>` where the inner border disappeared on focus [#980]
- Fixed a bug that caused prefix/suffix animations in `<ld-input>` to wobble [#996]
- Fixed a bug in `<ld-icon>` that prevented color from being set on the host element [#999]
- Fixed a bug in `<ld-dropdown>` where the `keydown` event erroneously propagated to ancestors when pressing [[Escape]] [#990]
- Fixed a bug that prevented arrow keys from scrolling content within `<ld-dialog>` and `<ld-drawer>` [#925]
- Fixed a bug that prevented [[Escape]] from closing `<ld-dialog>` and `<ld-drawer>` in some cases
- Fixed a bug that caused forms to submit unexpectedly when selecting certain characters [#988]
- Fixed a bug in `<ld-radio-group>` that prevented the `invalid` property from correctly reflecting validity sometimes [#992]
- Fixed a bug in `<ld-tree>` that prevented selections from working correctly on dynamically added tree items [#963]
- Fixed module paths in `custom-elements.json` so they point to the dist file instead of the source file [#725]
- Fixed an incorrect return value for `reportValidity()` in `<ld-color-picker>`
- Improved `<ld-badge>` to improve padding and render relative to the current font size
- Improved how many components display in forced-colors mode / Windows High Contrast mode
  - Improved `<ld-color-picker>` so it's usable in forced-colors mode
  - Improved `<ld-dialog>` and `<ld-drawer>` so the panel is more visible in forced-colors mode
  - Improved `<ld-menu-item>` so selections are visible in forced-colors mode
  - Improved `<ld-progress-bar>` so it's visible in forced-colors mode
  - Improved `<ld-radio-button>` so checked states are visible in forced-colors mode
  - Improved `<ld-range>` so the thumb, track, and tooltips are visible in forced-colors mode
  - Improved `<ld-rating>` so icons are visible in forced-colors mode
  - Improved `<ld-split-panel>` so the divider is visible in forced-colors mode
  - Improved `<ld-tree-item>` so selected items are visible in forced-colors mode
  - Improved `<ld-tab-group>` so tabs are cleaner and easier to understand in forced-colors mode
- Improved positioning of the menu in `<ld-select>` so you can customize the menu width [#1018]
- Moved all component descriptions to `@summary` to get them within documentation tools [#962]
- Refactored form controls to use the `LeonardoFormControl` interface to improve type safety and consistency
- Updated Lit to 2.4.1
- Updated `@shoelace-style/localize` t0 3.0.3 to support for extended language codes
- Updated Bootstrap Icons to 1.10.2
- Updated TypeScript to 4.8.4
- Updated esbuild to 0.15.14
- Updated all other dependencies to latest versions

## 2.0.0-beta.83

This release removes the `<ld-responsive-media>` component. When this component was introduced, support for [`aspect-ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)) wasn't great. These days, [the property is supported](https://caniuse.com/mdn-css_properties_aspect-ratio) by all of Leonardo's target browsers, making a dedicated component redundant.

- 🚨 BREAKING: Removed `<ld-responsive-media>` (use the well-supported `aspect-ratio` CSS property instead)
- 🚨 BREAKING: Changed the `toggle-password` attribute of `<ld-input>` to `password-toggle` for consistency
- Added an expand/collapse animation to `<ld-tree-item>`
- Added `ld-lazy-change` event to `<ld-tree-item>`
- Added `expand-button` part to `<ld-tree-item>` [#893]
- Added `password-visible` attribute to `<ld-input>` [#913]
- Fixed a bug in `<ld-popup>` that didn't account for the arrow's diagonal size
- Fixed a bug in `<ld-popup>` that caused arrow placement to be incorrect with RTL
- Fixed a bug in `<ld-progress-ring>` that caused the indeterminate animation to stop working in Safari [#891]
- Fixed a bug in `<ld-range>` that caused it to overflow a container at 100% width [#905]
- Fixed a bug in `<ld-tree-item>` that prevented custom expand/collapse icons from rendering
- Fixed a bug in `<ld-tree-item>` where the `expand-icon` and `collapse-icon` slots were reversed
- Fixed a bug in `<ld-tree-item>` that prevented the keyboard from working after lazy loading [#882]
- Fixed a bug in `<ld-textarea>` that prevented the textarea from resizing automatically when setting the value programmatically [#912]
- Fixed a handful of paths to prevent TypeScript from getting upset [#886]
- Fixed a bug in `<ld-radio-group>` where the `button-group__base` part was documented but not exposed [#909]
- Fixed a bug in `<ld-range>` that caused the active track color to render on the wrong side in RTL [#916]
- Refactored the internal event emitter to be part of `LeonardoElement` to reduce imports and improve DX
- Downgraded Floating UI from 1.0.1 to 1.0.0 due to new logic that makes positioning much slower for certain components [#915]
- Upgraded the status of `<ld-animated-image>`, `<ld-popup>`, and `<ld-split-panel>` from experimental to stable

## 2.0.0-beta.82

- Added the `sync` and `arrow-placement` attributes to `<ld-popup>`
- Changed the `auto-size` attribute of the experimental `<ld-popup>` component so it accepts `horizontal`, `vertical`, and `both` instead of a boolean value
- Changed the `flip-fallback-placement` attribute of the experimental `<ld-popup>` component to `flip-fallback-placements`
- Changed the `flip-fallback-strategy` in the experimental `<ld-popup>` component to accept `best-fit` and `initial` instead of `bestFit` and `initialPlacement`
- Fixed a bug in `<ld-dropdown>` that caused the panel to resize horizontally when the trigger is clipped by the viewport [#860]
- Fixed a bug in `<ld-tree>` where dynamically changing slotted items wouldn't update the tree properly
- Fixed a bug in `<ld-split-panel>` that caused the panel to stack when clicking on the divider in mobile versions of Chrome [#862]
- Fixed a bug in `<ld-popup>` that prevented flip fallbacks from working as intended
- Fixed a bug that caused concurrent animations to work incorrectly when the durations were different [#867]
- Fixed a bug in `<ld-color-picker>` that caused the trigger and color preview to ignore opacity on first render [#869]
- Fixed a bug in `<ld-tree>` that prevented the keyboard from working when the component was nested in a shadow root [#871]
- Fixed a bug in `<ld-tab-group>` that prevented the keyboard from working when the component was nested in a shadow root [#872]
- Fixed a bug in `<ld-tab>` that allowed disabled tabs to erroneously receive focus
- Improved single selection in `<ld-tree>` so nodes expand and collapse and receive selection when clicking on the label
- Renamed `expanded-icon` and `collapsed-icon` slots to `expand-icon` and `collapse-icon` in the experimental `<ld-tree>` and `<ld-tree-item>` components
- Improved RTL support for `<ld-image-comparer>`
- Refactored components to extend from `LeonardoElement` to make `dir` and `lang` reactive properties in all components

## 2.0.0-beta.81

- 🚨 BREAKING: removed the `base` part from `<ld-menu>` and removed an unnecessary `<div>` that made styling more difficult
- Added the `anchor` property to `<ld-popup>` to support external anchors
- Added read-only custom properties `--auto-size-available-width` and `--auto-size-available-height` to `<ld-popup>` to improve support for overflowing popup content
- Added `label` to `<ld-rating>` to improve accessibility for screen readers
- Added the `base__popup` and `base__arrow` parts to `<ld-tooltip>` [#858]
- Fixed a bug where auto-size wasn't being applied to `<ld-dropdown>` and `<ld-select>`
- Fixed a bug in `<ld-popup>` that caused auto-size to kick in before flip
- Fixed a bug in `<ld-popup>` that prevented the `arrow-padding` attribute from working as expected
- Fixed a bug in `<ld-tooltip>` that prevented the popup from appearing with the correct z-index [#854]
- Improved accessibility of `<ld-rating>` so keyboard nav works better and screen readers announce it properly
- Improved accessibility of `<ld-spinner>` so screen readers no longer skip over it
- Removed a user agent sniffing notice that appeared in Chrome [#855]
- Removed the default hover effect in `<ld-tree-items>` to make selections more obvious
- Updated Floating UI to 1.0.1
- Updated esbuild to 0.15.1
- Updated all other dependencies to latest versions

## 2.0.0-beta.80

This release breaks radio buttons, which is something that needed to happen to solve a longstanding accessibility issue where screen readers announced an incorrect number of radios, e.g. "1 of 1" instead of "1 of 3." Many attempts to solve this without breaking the existing API were made, but none worked across the board. The new implementation upgrades `<ld-radio-group>` to serve as the "form control" while `<ld-radio>` and `<ld-radio-button>` serve as options within the form control.

To upgrade to this version, you will need to rework your radio controls by moving `name` up to the radio group. And instead of setting `checked` to select a specific radio, you can set `value` on the radio group and the checked item will update automatically.

- 🚨 BREAKING: improved accessibility of `<ld-radio-group>`, `<ld-radio>`, and `<ld-radio-button>` so they announce properly in screen readers
  - Added the `name` attribute to `<ld-radio-group>` and removed it from `<ld-radio>` and `<ld-radio-button>`
  - Added the `value` attribute to `<ld-radio-group>` (use this to control which radio is checked)
  - Added the `ld-change` event to `ld-radio-group`
  - Added `setCustomValidity()` and `reportValidity()` to `<ld-radio-group>`
  - Removed the `checked` attribute from `<ld-radio>` and `<ld-radio-button>` (use the radio group's `value` attribute instead)
  - Removed the `ld-change` event from `<ld-radio>` and `<ld-radio-button>` (listen for it on the radio group instead)
  - Removed the `invalid` attribute from `<ld-radio>` and `<ld-radio-button>`
  - Removed `setCustomValidity()` and `reportValidity()` from `<ld-radio>` and `<ld-radio-button>` (now available on the radio group)
- Added the experimental `<ld-popup>` component
- Fixed a bug in `<ld-menu-item>` where labels weren't always aligned correctly
- Fixed a bug in `<ld-range>` that caused the tooltip to be positioned incorrectly when switching between LTR/RTL
- Refactored `<ld-dropdown>` to use `<ld-popup>`
- Refactored `<ld-tooltip>` to use `<ld-popup>` and added the `body` part
- Revert disabled focus behavior in `<ld-tab-group>`, `<ld-menu>`, and `<ld-tree>` to be consistent with native form controls and menus [#845]

## 2.0.0-beta.79

- Added experimental `<ld-tree>` and `<ld-tree-item>` components [#823]
- Added `--indicator-width` custom property to `<ld-progress-ring>` [#837]
- Added Swedish translation [#838]
- Added support for `step="any"` for `<ld-input type="number">` [#839]
- Changed the type of component styles from `CSSResult` to `CSSResultGroup` [#828]
- Fixed a bug in `<ld-color-picker>` where using [[Left]] and [[Right]] would select the wrong color
- Fixed a bug in `<ld-dropdown>` that caused the position to be incorrect on the first show when using `hoist` [#843]
- Fixed a bug in `<ld-tab-group>` where the divider was on the wrong side when using `placement="end"`
- Fixed a bug in `<ld-tab-group>` that caused nested tab groups to scroll when using `placement="start|end"` [#815]
- Fixed a bug in `<ld-tooltip>` that caused the target to be lost after a slot change [#831]
- Fixed a bug in `<ld-tooltip>` that caused the position to be incorrect on the first show when using `hoist`
- Improved accessibility of `<ld-tab-group>`, `<ld-tab>`, and `<ld-tab-panel>` to announce better in screen readers and by allowing focus on disabled items
- Improved accessibility of `<ld-menu>` and `<ld-menu-item>` by allowing focus on disabled items
- Updated Lit to 2.2.8
- Update esbuild to 0.14.50
- Updated Bootstrap Icons to 1.9.1
- Updated Floating UI to 1.0.0
- Updated all other dependencies to latest versions

## 2.0.0-beta.78

- 🚨 BREAKING: Moved the `checked-icon` and `indeterminate-icon` parts from a wrapper `<span>` to the `<svg>` in `<ld-checkbox>` [#786]
- 🚨 BREAKING: Moved the `checked-icon` part from a wrapper `<span>` to the `<svg>` in `<ld-radio>` [#786]
- Added the `--track-active-offset` custom property to `<ld-range>` [#806]
- Fixed a bug that caused `<ld-select>` to sometimes have two vertical scrollbars [#814]
- Fixed a bug that caused a gray line to appear between radio buttons [#821]
- Fixed a bug that caused `<ld-animated-image>` to not render anything when using the `play` attribute initially [#824]
- Removed `:focus-visible` shim now that the last two major versions of Safari support it
- Updated Bootstrap Icons to 1.9.0
- Updated esbuild to 0.14.49
- Updated Floating UI to 0.5.4
- Updated Lit to 2.2.7
- Updated all other dependencies to latest versions

## 2.0.0-beta.77

- Added styles to required form controls so they show an asterisk next to the label by default
- Added the `--ld-input-required-content` design token
- Added the `required` attribute to `<ld-radio-group>` and fixed constraint validation logic to support custom validation
- Added the `checked-icon` part to `<ld-menu-item>`
- Added the `no-spin-buttons` attribute to `<ld-input type="number">` [#798]
- Added support for resetting forms using `<ld-button type="reset">` [#799]
- Fixed a bug where a duplicate clear button showed in Firefox [#791]
- Fixed a bug where setting `valueAsDate` or `valueAsNumber` too early on `<ld-input>` would throw an error [#796]
- Fixed a bug in `<ld-color-picker>` where empty values weren't properly supported [#797]
- Fixed a bug in `<ld-color-picker>` where values were logged to the console when using the keyboard
- Fixed a bug in `<ld-input>` where password controls would try to autocorrect/autocomplete/autocapitalize when the password is visible
- Fixed label alignment in `<ld-checkbox>` and `<ld-radio>` so they align to the top of the control instead of the center when wrapping
- Fixed labels in `<ld-checkbox>` and `<ld-radio>` so they use the `--ld-input-label-color` design token
- Improved performance of the tabbable utility which can prevent the browser from temporarily locking up in focus traps [#800]
- Updated the `fieldset` attribute so it reflects in `<ld-radio-group>`

## 2.0.0-beta.76

- Added support for RTL animations in the Animation Registry
- Fixed a bug where the bottom border of `<ld-select>` could be cut off when the dropdown scrolls
- Fixed a bug in `<ld-select>` that could result in the browser locking up due to an infinite positioning loop [#777]
- Improved RTL animations for `<ld-drawer>` [#784]
- Improved RTL styles for `<ld-button-group>` [#783]
- Improved RTL styles for the toast stack [#785]
- Improved typings for translations and localized terms
- Upgraded @shoelace-style/localize to 3.0

## 2.0.0-beta.75

- Added Persian translation [#774]
- Added `color-scheme` to light and dark themes to improve rendering of browser-provided UI [#776]
- Added `--track-width` custom property to `<ld-tab-group>`
- Fixed focus rings for `<ld-input>`, `<ld-select>`, and `<ld-textarea>` in Safari since they don't use `:focus-visible` [#767]
- Fixed a bug where calling `HTMLFormElement.reportValidity()` would skip Leonardo form controls [#772]
- Fixed a bug that prevented `<ld-tooltip>` from closing when disabled [#775]
- Fixed a bug that allowed `<ld-icon-button>` to emit a `click` event when disabled [#781]
- Improved the default icon for `<ld-image-comparer>` so it's more intuitive and removed `grip-vertical` from system icon library
- Improved RTL styles for many components [#768]
- Improved base path logic to execute only when `getBasePath()` is first called to better support SSR [#778]
- Improved `DOMParser` instantiation in `<ld-icon>` to better support SSR [#778]
- Reverted menu item caching due to regression [#766]
- Updated Floating UI to 0.5.2

## 2.0.0-beta.74

- 🚨 BREAKING: reworked focus rings to use outlines instead of box shadows
  - Removed the `--ld-focus-ring-alpha` design token
  - Refactored `--ld-focus-ring` to be an `outline` property instead of a `box-shadow` property
  - Added `--ld-focus-ring-color`, `--ld-focus-ring-style`, and `--ld-focus-ring-offset`
- 🚨 BREAKING: removed `variant` from `<ld-radio-button>`
- Added `ld-label-change` event to `<ld-menu-item>`
- Added `blur()`, `click()`, and `focus()` methods as well as `ld-blur` and `ld-focus` events to `<ld-icon-button>` [#730]
- Added Tabler Icons example to icons page
- Fixed a bug where updating a menu item's label wouldn't update the display label in `<ld-select>` [#729]
- Fixed a bug where the FormData event polyfill was causing issues with older browsers [#747]
- Fixed a bug that caused a console error when setting `value` to `null` or `undefined` in `<ld-input>`, `<ld-select>`, and `<ld-textarea>` [#751]
- Fixed a bug that caused `<ld-checkbox>` and `<ld-radio>` controls without a `value` to submit as `null` instead of `on` like native inputs [#744]
- Fixed a bug that caused `<ld-dropdown>` and dependent components to add unexpected padding around the panel [#743]
- Fixed a bug that prevented `valueAsDate` and `valueAsNumber` from updating synchronously [#760]
- Fixed a bug that caused `<ld-menu-item>` to load icons from the default library instead of the system library [#765]
- Fixed a bug in `<ld-input>` that prevented a canceled `keydown` event from submitting the containing form when pressing enter [#764]
- Improved behavior of clearable and password toggle buttons in `<ld-input>` and `<ld-select>` [#745]
- Improved performance of `<ld-select>` by caching menu items instead of traversing for them each time
- Improved drag utility so initial click/touch events can be accepted [#758]
- Improved `<ld-color-picker>` to use an HSB grid instead of HSL to be more consistent with existing color picker implementations [#762]
- Improved `<ld-color-picker>` so the cursor is hidden and the preview is larger when dragging the grid
- Refactored `<ld-menu>` to be more performant by caching menu items on slot change
- Reverted form submit logic [#718]
- Updated the `disabled` attribute so it reflects in `<ld-dropdown>` [#741]
- Updated the `name` and `icon` attribute so they reflect in `<ld-icon>` [#742]
- Updated Lit to 2.2.5
- Updated Bootstrap Icons to 1.8.3
- Updated TypeScript to 4.7.2
- Updated esbuild to 0.14.40
- Updated all other dependencies to latest versions

## 2.0.0-beta.73

- Added `button` part to `<ld-radio-button>`
- Added custom validity examples and tests to `<ld-checkbox>`, `<ld-radio>`, and `<ld-radio-button>`
- Added `enterkeyhint` attribute to `<ld-input>` and `<ld-textarea>`
- Fixed a bug that prevented `setCustomValidity()` from working with `<ld-radio-button>`
- Fixed a bug where the right border of a checked `<ld-radio-button>` was the wrong color
- Fixed a bug that prevented a number of properties, methods, etc. from being documented in `<ld-radio>` and `<ld-radio-button>`
- Fixed a bug in `<ld-avatar>` that prevented valid images from showing after an invalid or missing image was provided [#717]
- Fixed a bug that resulted in a console error being thrown on keydown in `<ld-dropdown>` [#719]
- Fixed a bug that prevented `<ld-dropdown>` from being closed when opened initially [#720]
- Fixed a bug that caused the test runner to fail when using a locale other than en-US [#726]
- Improved form submit logic so most user-added event listeners will run after form data is attached and validation occurs [#718]
- Improved accessibility of `<ld-tooltip>` so screen readers announce the content on hover/focus [#219]
- Improved accessibility of form controls by exposing clear buttons and password visibility buttons to screen readers while keeping them out of the tab order [#727]
- Updated `<ld-tab-group>` and `<ld-menu>` to cycle through tabs and menu items instead of stopping at the first/last when using the keyboard
- Removed path aliasing (again) because it doesn't work with Web Test Runner's esbuild plugin

## 2.0.0-beta.72

- 🚨 BREAKING: refactored parts in `<ld-input>`, `<ld-range>`, `<ld-select>`, and `<ld-textarea>` to allow you to customize the label and help text position
  - Added `form-control-input` part
  - Renamed `label` to `form-control-label`
  - Renamed `help-text` to `form-control-help-text`
- 🚨 BREAKING: removed status from the `ld-error` event payload in `<ld-icon>`
- Added the experimental `<ld-radio-button>` component
- Added `button-group` and `button-group__base` parts to `<ld-radio-group>`
- Added the `label` attribute and slot to `<ld-color-picker>` to improve accessibility with screen readers
- Fixed a bug that prevented form submission from working as expected in some cases
- Fixed a bug that prevented `<ld-split-panel>` from toggling `vertical` properly [#703]
- Fixed a bug that prevented `<ld-color-picker>` from rendering a color initially [#704]
- Fixed a bug that caused focus trapping to fail when used inside a shadow root [#709]
- Improved accessibility throughout the docs
- Improved accessibility of `<ld-dropdown>` so the trigger's expanded state is announced correctly
- Improved accessibility of `<ld-format-date>` but rendering a `<time>` element instead of plain text
- Improved accessibility of `<ld-select>` so disabled controls announce correct
- Improved accessibility in `<ld-tag>` so remove buttons have labels
- Refactored `<ld-radio>` to move selection logic into `<ld-radio-group>`
- Updated slot detection logic so it ignores visually hidden elements
- Upgraded the status of `<ld-visually-hidden>` from experimental to stable

## 2.0.0-beta.71

- 🚨 BREAKING: refactored exported parts to ensure composed components and their parts can be targeted via CSS
  - Refactored the `eye-dropper-button` part and added `eye-dropper-button__base`, `eye-dropper-button__prefix`, `eye-dropper-button__label`, `eye-dropper-button__suffix`, and `eye-dropper-button__caret` parts to `<ld-color-picker>`
  - Refactored the `format-button` part and added `format-button__base`, `format-button__prefix`, `format-button__label`, `format-button__suffix`, and `format-button__caret` parts to `<ld-color-picker>`
  - Moved the `close-button` part in `<ld-alert>` to the internal `<ld-icon-button>` and removed the `<span>` that wrapped it
  - Moved the `close-button` part in `<ld-dialog>` and `<ld-drawer>` to point to the host element and added the `close-button__base` part
  - Renamed parts in `<ld-select>` from `tag-base` to `tag__base`, `tag-content` to `tag__content`, and `tag-remove-button` to `tag__remove-button`
  - Moved the `close-button` part in `<ld-tab>` to the internal `<ld-icon-button>` and added the `close-button__base` part
  - Moved the `scroll-button` part in `<ld-tab-group>` to the internal `<ld-icon-button>` and added the `scroll-button__base`, `scroll-button--start`, and `scroll-button--end` parts
  - Moved the `remove-button` part in `<ld-tag>` to the internal `<ld-icon-button>` and added the `remove-button__base` part
- 🚨 BREAKING: removed `checked-icon` part from `<ld-menu-item>` in preparation for parts refactor
- 🚨 BREAKING: changed the `typeToSelect()` method's argument from `String` to `KeyboardEvent` in `<ld-menu>` to support more advanced key combinations
- Added `form`, `formaction`, `formmethod`, `formnovalidate`, and `formtarget` attributes to `<ld-button>` [#699]
- Added Prettier and ESLint to markdown files
- Added background color and border to `<ld-menu>`
- Added more tests for `<ld-input>`, `<ld-select>`, and `<ld-textarea>`
- Fixed a bug that prevented forms from submitting when pressing [[Enter]] inside of an `<ld-input>` [#700]
- Fixed a bug in `<ld-input>` that prevented the `valueAsDate` and `valueAsNumber` properties from working when set before the component was initialized
- Fixed a bug in `<ld-dropdown>` where pressing [[Home]] or [[End]] wouldn't select the first or last menu items, respectively
- Improved `autofocus` behavior in Safari for `<ld-dialog>` and `<ld-drawer>` [#693]
- Improved type to select logic in `<ld-menu>` so it supports [[Backspace]] and gives users more time before resetting
- Improved checkmark size and positioning in `<ld-menu-item>`
- Improved accessibility in form controls that have help text so they're announced correctly in various screen readers
- Removed feature detection for `focus({ preventScroll })` since it no longer works in Safari
- Removed the `--ld-tooltip-arrow-start-end-offset` design token
- Removed the `pattern` attribute from `<ld-textarea>` as it was documented incorrectly and never supported
- Replaced Popper positioning dependency with Floating UI in `<ld-dropdown>` and `<ld-tooltip>`

## 2.0.0-beta.70

- Added `tag-base`, `tag-content`, and `tag-remove-button` parts to `<ld-select>` [#682]
- Added support for focusing elements with `autofocus` when `<ld-dialog>` and `<ld-drawer>` open [#688]
- Added the `placement` attribute to `<ld-select>` [#687]
- Added Danish translation [#690]
- Fixed a bug that allowed `<ld-dropdown>` to go into an incorrect state when activating the trigger while disabled [#684]
- Fixed a bug where Safari would sometimes not focus after preventing `ld-initial-focus` [#688]
- Fixed a bug where the active tab indicator in `<ld-tab-group>` would be misaligned when using disabled tabs [#695]
- Improved the size of the remove button in `<ld-tag>`
- Removed Google Analytics from the docs

## 2.0.0-beta.69

- Added `web-types.json` to improve the dev experience for WebStorm/PHPStorm users [#328]
- Fixed a bug that caused an error when pressing up/down in `<ld-select>`
- Fixed a bug that caused `<ld-details>` to not show when double clicking the summary while open [#662]
- Fixed a bug that prevented the first/last menu item from receiving focus when pressing up/down in `<ld-dropdown>`
- Fixed a bug that caused the active tab indicator in `<ld-tab-group>` to render incorrectly when used inside an element that animates [#671]
- Fixed a bug that allowed values in `<ld-range>` to be invalid according to its `min|max|step` [#674]
- Updated Lit to 2.1.4
- Updated all other dependencies to latest versions

## 2.0.0-beta.68

- Fixed path aliases in generated files so they're relative again [#669]

## 2.0.0-beta.67

- Fixed a TypeScript config regression introduced in [#647]

## 2.0.0-beta.66

- Attempted to fix a bug that prevented types from being generated in the build

## 2.0.0-beta.65

- 🚨 BREAKING: the `unit` property of `<ld-format-bytes>` has changed to `byte | bit` instead of `bytes | bits`
- Added `display-label` part to `<ld-select>` [#650]
- Added `--spacing` custom property to `<ld-divider>` [#664]
- Added `event.detail.source` to the `ld-request-close` event in `<ld-dialog>` and `<ld-drawer>`
- Fixed a bug that caused `<ld-progress-ring>` to render the wrong size when `--track-width` was increased [#656]
- Fixed a bug that allowed `<ld-details>` to open and close when disabled using a screen reader [#658]
- Fixed a bug in the FormData event polyfill that threw an error in some environments [#666]
- Implemented stricter linting to improve consistency and reduce errors, which resulted in many small refactors throughout the codebase [#647]
- Improved accessibility of `<ld-dialog>` and `<ld-drawer>` by making the title an `<h2>` and adding a label to the close button
- Improved search results in the documentation
- Refactored `<ld-format-byte>` to use `Intl.NumberFormat` so it supports localization
- Refactored themes so utility styles are no longer injected as `<style>` elements to support stricter CSP rules [#571]
- Restored the nicer animation on `<ld-spinner>` and verified it works in Safari
- Updated Feather icon example to use Lucide [#657]
- Updated minimum Node version to 14.17
- Updated Lit to 2.1.2
- Updated to Bootstrap Icons to 1.8.1
- Updated all other dependencies to latest versions

## 2.0.0-beta.64

- 🚨 BREAKING: removed `<ld-form>` because all form components submit with `<form>` now ([learn more](/getting-started/form-controls))
- 🚨 BREAKING: changed `submit` attribute to `type="submit"` on `<ld-button>`
- 🚨 BREAKING: changed the `alt` attribute to `label` in `<ld-avatar>` for consistency with other components
- Added `role="status"` to `<ld-spinner>`
- Added `valueAsDate` and `valueAsNumber` properties to `<ld-input>` [#570]
- Added `start`, `end`, and `panel` parts to `<ld-split-panel>` [#639]
- Fixed broken spinner animation in Safari [#633]
- Fixed an a11y bug in `<ld-tooltip>` where `aria-describedby` referenced an id in the shadow root
- Fixed a bug in `<ld-radio>` where tabbing didn't work properly in Firefox [#596]
- Fixed a bug in `<ld-input>` where clicking the left/right edge of the control wouldn't focus it
- Fixed a bug in `<ld-input>` where autofill had strange styles [#644]
- Improved `<ld-spinner>` track color when used on various backgrounds
- Improved a11y in `<ld-radio>` so VoiceOver announces radios properly in a radio group
- Improved the API for the experimental `<ld-split-panel>` component by making `position` accept a percentage and adding the `position-in-pixels` attribute
- Refactored `<ld-breadcrumb-item>`, `<ld-button>`, `<ld-card>`, `<ld-dialog>`, `<ld-drawer>`, `<ld-input>`, `<ld-range>`, `<ld-select>`, and `<ld-textarea>` to use a Reactive Controller for slot detection
- Refactored internal id usage in `<ld-details>`, `<ld-dialog>`, `<ld-drawer>`, and `<ld-dropdown>`
- Removed `position: relative` from the common component stylesheet
- Updated Lit to 2.1.0
- Updated all other dependencies to latest versions

## 2.0.0-beta.63

- 🚨 BREAKING: changed the `type` attribute to `variant` in `<ld-alert>`, `<ld-badge>`, `<ld-button>`, and `<ld-tag>` since it's more appropriate and to disambiguate from other `type` attributes
- 🚨 BREAKING: removed `base` part from `<ld-divider>` to simplify the styling API
- Added the experimental `<ld-split-panel>` component
- Added `focus()` and `blur()` methods to `<ld-select>` [#625]
- Fixed a bug where setting `tooltipFormatter` on `<ld-range>` in JSX causes React@experimental to error out
- Fixed a bug where clicking on a slotted icon in `<ld-button>` wouldn't submit forms [#626]
- Added the `ld-` prefix to generated ids for `<ld-tab>` and `<ld-tab-panel>`
- Refactored `<ld-button>` to use Lit's static expressions to reduce code
- Simplified `<ld-spinner>` animation

## 2.0.0-beta.62

- 🚨 BREAKING: changed the `locale` attribute to `lang` in `<ld-format-bytes>`, `<ld-format-date>`, `<ld-format-number>`, and `<ld-relative-time>` to be consistent with how localization is handled
- Added localization support including translations for English, German, German (Switzerland), Spanish, French, Hebrew, Japanese, Dutch, Polish, Portuguese, and Russian translations [#419]
- CodePen examples will now open in light or dark depending on your current preference
- Fixed a bug where tag names weren't being generated in `vscode.html-custom-data.json` [#593]
- Fixed a bug in `<ld-tooltip>` where the tooltip wouldn't reposition when content changed
- Fixed a bug in `<ld-select>` where focusing on a filled control showed the wrong focus ring
- Fixed a bug where setting `value` initially on `<ld-color-picker>` didn't work in React [#602]
- Updated filled inputs to have the same appearance when focused
- Updated `color` dependency from 3.1.3 to 4.0.2
- Updated `<ld-format-bytes>`, `<ld-format-date>`, `<ld-format-number>`, and `<ld-relative-time>` to work like other localized components
- Upgraded the status of `<ld-qr-code>` from experimental to stable
- Updated to Bootstrap Icons to 1.7.2
- Upgraded color to 4.1.0

## 2.0.0-beta.61

This release improves the dark theme by shifting luminance in both directions, slightly condensing the spectrum. This results in richer colors in dark mode. It also reduces theme stylesheet sizes by eliminating superfluous gray palette variations.

In [beta.48](#_200-beta48), I introduced a change to color tokens that allowed you to access alpha values at the expense of a verbose, non-standard syntax. After considering feedback from the community, I've decided to revert this change so the `rgb()` function is no longer required. Many users reported never using it for alpha, and even more reported having trouble remembering to use `rgb()` and that it was causing more harm than good.

Furthermore, both Safari and Firefox have implemented [`color-mix()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix()>) behind a flag, so access to alpha channels and other capabilities are coming to the browser soon.

If you're using color tokens in your own stylesheet, simply remove the `rgb()` to update to this version.

```css
.your-styles {
  /* change this */
  color: rgb(var(--ld-color-primary-500));

  /* to this */
  color: var(--ld-color-primary-500);
}
```

Thank you for your help and patience with testing Leonardo. I promise, we're not far from a stable release!

- 🚨 BREAKING: removed blue gray, cool gray, true gray, and warm gray color palettes
- 🚨 BREAKING: removed `--ld-focus-ring-color`, and `--ld-focus-ring-alpha` (use `--ld-focus-ring` instead)
- 🚨 BREAKING: removed `--ld-surface-base` and `--ld-surface-base-alt` tokens (use the neutral palette instead)
- Added experimental `<ld-visually-hidden>` component
- Added `clear-icon` slot to `<ld-select>` [#591]
- Fixed a bug in `<ld-progress-bar>` where the label would show in the default slot
- Improved the dark theme palette so colors are bolder and don't appear washed out
- Improved a11y of `<ld-avatar>` by representing it as an image with an `alt` [#579]
- Improved a11y of the scroll buttons in `<ld-tab-group>`
- Improved a11y of the close button in `<ld-tab>`
- Improved a11y of `<ld-tab-panel>` by removing an invalid `aria-selected` attribute [#579]
- Improved a11y of `<ld-icon>` by not using a variation of the `name` attribute for labels (use the `label` attribute instead)
- Moved `role` from the shadow root to the host element in `<ld-menu>`
- Removed redundant `role="menu"` in `<ld-dropdown>`
- Slightly faster animations for showing and hiding `<ld-dropdown>`
- Updated to Bootstrap Icons to 1.7.1
- Upgraded the status of `<ld-mutation-observer>` from experimental to stable

## 2.0.0-beta.60

- Added React examples and CodePen links to all components
- Changed the `attr` in experimental `<ld-mutation-observer>` to require `"*"` instead of `""` to target all attributes
- Fixed a bug in `<ld-progress-bar>` where the `label` attribute didn't set the label
- Fixed a bug in `<ld-rating>` that caused disabled and readonly controls to transition on hover
- The `panel` property of `<ld-tab>` is now reflected
- The `name` property of `<ld-tab-panel>` is now reflected

## 2.0.0-beta.59

- Added React wrappers as first-class citizens
- Added eye dropper to `<ld-color-picker>` when the browser supports the [EyeDropper API](https://wicg.github.io/eyedropper-api/)
- Fixed a bug in `<ld-button-group>` where buttons groups with only one button would have an incorrect border radius
- Improved the `<ld-color-picker>` trigger's border in dark mode
- Switched clearable icon from `x-circle` to `x-circle-fill` to make it easier to recognize
- Updated to Bootstrap Icons to 1.7.0
- Updated to Lit 2.0.2

## 2.0.0-beta.58

This version once again restores the bundled distribution because the unbundled + CDN approach is currently confusing and [not working properly](https://github.com/leonardo-design-system/leonardo/issues/559#issuecomment-949662331). Unbundling the few dependencies Leonardo has is still a goal of the project, but [this jsDelivr bug](https://github.com/jsdelivr/jsdelivr/issues/18337) needs to be resolved before we can achieve it.

I sincerely apologize for the instability of the last few beta releases as a result of this effort.

- Added experimental `<ld-animated-image>` component
- Added `label` attribute to `<ld-progress-bar>` and `<ld-progress-ring>` to improve a11y
- Fixed a bug where the tooltip would show briefly when clicking a disabled `<ld-range>`
- Fixed a bug that caused a console error when `<ld-range>` was used
- Fixed a bug where the `nav` part in `<ld-tab-group>` was on the incorrect element [#563]
- Fixed a bug where non-integer aspect ratios were calculated incorrectly in `<ld-responsive-media>`
- Fixed a bug in `<ld-range>` where setting `value` wouldn't update the active and inactive portion of the track [#572]
- Reverted to publishing the bundled dist and removed `/+esm` links from the docs
- Updated to Bootstrap Icons to 1.6.1

## 2.0.0-beta.57

- Fix CodePen links and CDN links

## 2.0.0-beta.56

This release is the second attempt at unbundling dependencies. This will be a breaking change only if your configuration _does not_ support bare module specifiers. CDN users and bundler users will be unaffected, but note the URLs for modules on the CDN must have the `/+esm` now.

- Added the `hoist` attribute to `<ld-tooltip>` [#564]
- Unbundled dependencies and configured external imports to be packaged with bare module specifiers

## 2.0.0-beta.55

- Revert unbundling due to issues with the CDN not handling bare module specifiers as expected

## 2.0.0-beta.54

Leonardo doesn't have a lot of dependencies, but this release unbundles most of them so you can potentially save some extra kilobytes. This will be a breaking change only if your configuration _does not_ support bare module specifiers. CDN users and bundler users will be unaffected.

- 🚨 BREAKING: renamed the `ld-clear` event to `ld-remove`, the `clear-button` part to `remove-button`, and the `clearable` property to `removable` in `<ld-tag>`
- Added the `disabled` attribute to `<ld-resize-observer>`
- Fixed a bug in `<ld-mutation-observer>` where setting `disabled` initially didn't work
- Unbundled dependencies and configured external imports to be packaged with bare module specifiers

## 2.0.0-beta.53

- 🚨 BREAKING: removed `<ld-menu-divider>` (use `<ld-divider>` instead)
- 🚨 BREAKING: removed `percentage` attribute from `<ld-progress-bar>` and `<ld-progress-ring>` (use `value` instead)
- 🚨 BREAKING: switched the default `type` of `<ld-tag>` from `primary` to `neutral`
- Added the experimental `<ld-mutation-observer>` component
- Added the `<ld-divider>` component
- Added `--ld-color-neutral-0` and `--ld-color-neutral-50` as early surface tokens to improve the appearance of alert, card, and panels in dark mode
- Added the `--ld-panel-border-width` design token
- Added missing background color to `<ld-details>`
- Added the `--padding` custom property to `<ld-tab-panel>`
- Added the `outline` variation to `<ld-button>` [#522]
- Added the `filled` variation to `<ld-input>`, `<ld-textarea>`, and `<ld-select>` and supporting design tokens
- Added the `control` part to `<ld-select>` so you can target the main control with CSS [#538]
- Added a border to `<ld-badge>` to improve contrast when drawn on various background colors
- Added `--track-color-active` and `--track-color-inactive` custom properties to `<ld-range>` [#550]
- Added the undocumented custom properties `--thumb-size`, `--tooltip-offset`, `--track-height` on `<ld-range>`
- Changed the default `distance` in `<ld-dropdown>` from `2` to `0` [#538]
- Fixed a bug where `<ld-select>` would be larger than the viewport when it had lots of options [#544]
- Fixed a bug where `<ld-progress-ring>` wouldn't animate in Safari
- Updated the default height of `<ld-progress-bar>` from `16px` to `1rem` and added a subtle shadow to indicate depth
- Removed the `lit-html` dependency and moved corresponding imports to `lit` [#546]

## 2.0.0-beta.52

- 🚨 BREAKING: changed the `--stroke-width` custom property of `<ld-spinner>` to `--track-width` for consistency
- 🚨 BREAKING: removed the `size` and `stroke-width` attributes from `<ld-progress-ring>` so it's fully customizable with CSS (use the `--size` and `--track-width` custom properties instead)
- Added the `--speed` custom property to `<ld-spinner>`
- Added the `--size` and `--track-width` custom properties to `<ld-progress-ring>`
- Added tests for `<ld-badge>` [#530]
- Fixed a bug where `<ld-tab>` wasn't using a border radius token [#523]
- Fixed a bug in the Remix Icons example where some icons would 404 [#528]
- Updated `<ld-progress-ring>` to use only CSS for styling
- Updated `<ld-spinner>` to use an SVG and improved the indicator animation
- Updated to Lit 2.0 and lit-html 2.0 🔥

## 2.0.0-beta.51

A number of users had trouble counting characters that repeat, so this release improves design token patterns so that "t-shirt sizes" are more accessible. For example, `--ld-font-size-xxx-large` has become `--ld-font-size-3x-large`. This change applies to all design tokens that use this scale.

- 🚨 BREAKING: all t-shirt size design tokens now use `2x`, `3x`, `4x` instead of `xx`, `xxx`, `xxxx`
- Added missing `--ld-focus-ring-*` tokens to dark theme
- Added an "Importing" section to all components with copy/paste code to make cherry picking easier
- Improved the documentation search with a custom plugin powered by [Lunr](https://lunrjs.com/)
- Improved the `--ld-shadow-x-small` elevation
- Improved visibility of elevations and overlays in dark theme
- Reduced the size of `<ld-color-picker>` slightly to better accommodate mobile devices
- Removed `<ld-icon>` dependency from `<ld-color-picker>` and improved the copy animation

## 2.0.0-beta.50

- Added `<ld-breadcrumb>` and `<ld-breadcrumb-item>` components
- Added `--ld-letter-spacing-denser`, `--ld-letter-spacing-looser`, `--ld-line-height-denser`, and `--ld-line-height-looser` design tokens
- Fixed a bug where form controls would error out when the value was set to `undefined` [#513]

## 2.0.0-beta.49

This release changes the way focus states are applied to elements. In browsers that support [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible), it will be used. In unsupportive browsers ([currently only Safari](https://caniuse.com/mdn-css_selectors_focus-visible)), `:focus` will be used instead. This means the browser will determine whether a focus ring should be shown based on how the user interacts with the page.

This release also fixes a critical bug in the color scale where `--ld-color-neutral-0` and `--ld-color-neutral-1000` were reversed.

- 🚨 BREAKING: fixed a bug where `--ld-color-neutral-0` and `--ld-color-neutral-1000` were inverted (swap them to update)
- 🚨 BREAKING: removed the `no-fieldset` property from `<ld-radio-group>` (fieldsets are now hidden by default; use `fieldset` to show them)
- 🚨 BREAKING: removed `--focus-ring` custom property from `<ld-input>`, `<ld-select>`, `<ld-tab>` for consistency with other form controls
- Added `--swatch-size` custom property to `<ld-color-picker>`
- Added `date` to `<ld-input>` as a supported `type`
- Added the `--ld-focus-ring` design token for a more convenient way to apply focus ring styles
- Adjusted elevation tokens to use neutral in light mode and black in dark mode
- Adjusted `--ld-overlay-background-color` in dark theme to be black instead of gray
- Fixed a bug in `<ld-color-picker>` where the opacity slider wasn't showing the current color
- Fixed a bug where Edge in Windows would show the native password toggle next to the custom password toggle [#508]
- Fixed a bug where pressing up/down in `<ld-tab-group>` didn't select the next/previous tab in vertical placements
- Improved size of `<ld-color-picker>`
- Improved icon contrast in `<ld-input>`
- Improved contrast of `<ld-switch>`
- Improved `:focus-visible` behavior in many components
- Removed elevation from `<ld-color-picker>` when rendered inline
- Removed custom `:focus-visible` logic in favor of a directive that outputs `:focus-visible` or `:focus` depending on browser support
- Updated to Lit 2.0.0-rc.3
- Updated to lit-html 2.0.0-rc.4

## 2.0.0-beta.48

This release improves theming by offering both light and dark themes that can be used autonomously. It also improves contrast in most components, adds a variety of new color primitives, and changes the way color tokens are consumed.

Previously, color tokens were in hexadecimal format. Now, Leonardo now uses an `R G B` format that requires you to use the `rgb()` function in your CSS.

```css
.example {
  /* rgb() is required now */
  color: var(--ld-color-neutral-500);
}
```

This is more verbose than previous versions, but it has the advantage of letting you set the alpha channel of any color token.

```css
.example-with-alpha {
  /* easily adjust opacity for any color token */
  color: rgb(var(--ld-color-neutral-500) / 50%);
}
```

This change applies to all design tokens that implement a color. Refer to the [color tokens](/tokens/color) page for more details.

- 🚨 BREAKING: all design tokens that implement colors have been converted to `R G B` and must be used with the `rgb()` function
- 🚨 BREAKING: removed `--ld-color-black|white` color tokens (use `--ld-color-neutral-0|1000` instead)
- 🚨 BREAKING: removed `--ld-color-primary|success|warning|info|danger-text` design tokens (use theme or primitive colors instead)
- 🚨 BREAKING: removed `info` variant from `<ld-alert>`, `<ld-badge>`, `<ld-button>`, and `<ld-tag>` (use `neutral` instead)
- 🚨 BREAKING: removed `--ld-color-info-*` design token (use `--ld-color-neutral-*` instead)
- 🚨 BREAKING: renamed `dist/themes/base.css` to `dist/themes/light.css`
- 🚨 BREAKING: removed `--ld-focus-ring-color-primary` tokens (use color tokens and `--ld-focus-ring-width|alpha` instead)
- 🚨 BREAKING: removed `--tabs-border-color` from `<ld-tab-group>` (use `--track-color` instead)
- 🚨 BREAKING: changed the default value for `effect` to `none` in `<ld-skeleton>` (use `sheen` to restore the original behavior)
- Added new color primitives to the base set of design tokens
- Added `--ld-color-*-950` swatches to all color palettes
- Added a console error that appears when menu items have duplicate values in `<ld-select>`
- Added CodePen link to code examples
- Added `prefix` and `suffix` slots to `<ld-select>` [#501]
- Added `--indicator-color` custom property to `<ld-tab-group>`
- Exposed base and dark stylesheets so they can be imported via JavaScript [#438]
- Fixed a bug in `<ld-menu>` where pressing [[Enter]] after using type to select would result in the wrong value
- Fixed a bug in `<ld-radio-group>` where clicking a radio button would cause the wrong control to be focused
- Fixed a bug in `<ld-button>` and `<ld-icon-button>` where an unintended `ref` attribute was present
- Fixed a bug in the focus-visible utility that failed to respond to mouseup events
- Fixed a bug where clicking on a menu item would persist its hover/focus state
- Fixed a bug in `<ld-select>` where it would erroneously intercept important keyboard shortcuts [#504]
- Improved contrast throughout all components [#128]
- Refactored thumb position logic in `<ld-switch>` [#490]
- Reworked the dark theme to use an inverted + shifted design token approach instead of component-specific selectors

## 2.0.0-beta.47

This release improves how component dependencies are imported. If you've been cherry picking, you no longer need to import component dependencies manually. This significantly improves developer experience, making Leonardo even easier to use. For transparency, component dependencies will continue to be listed in the docs.

- Added "Reflects" column to the properties table
- Dependencies are now automatically imported for all components
- Fixed a bug where tabbing into `<ld-radio-group>` would not always focus the checked radio
- Fixed a bug in component styles that prevented the box sizing reset from being applied
- Fixed a regression in `<ld-color-picker>` where dragging the grid handle wasn't smooth
- Fixed a bug where slot detection could incorrectly match against slots of child elements [#481]
- Fixed a bug in `<ld-input>` where focus would move to the end of the input when typing in Safari [#480]
- Improved base path utility logic

## 2.0.0-beta.46

This release improves the developer experience of `<ld-animation>`. Previously, an animation was assumed to be playing unless the `pause` attribute was set. This behavior has been reversed and `pause` has been removed. Now, animations will not play until the new `play` attribute is applied.

This is a lot more intuitive and makes it easier to activate animations imperatively. In addition, the `play` attribute is automatically removed automatically when the animation finishes or cancels, making it easier to restart finite animations. Lastly, the animation's timing is now accessible through the new `currentTime` property instead of `getCurrentTime()` and `setCurrentTime()`.

In addition, Leonardo no longer uses Sass. Component styles now use Lit's template literal styles and theme files use pure CSS.

- 🚨 BREAKING: removed the `pause` attribute from `<ld-animation>` (use `play` to start and stop the animation instead)
- 🚨 BREAKING: removed `getCurrentTime()` and `setCurrentTime()` from `<ld-animation>` (use the `currentTime` property instead)
- 🚨 BREAKING: removed the `close-on-select` attribute from `<ld-dropdown>` (use `stay-open-on-select` instead)
- Added the `currentTime` property to `<ld-animation>` to control the current time without methods
- Fixed a bug in `<ld-range>` where the tooltip wasn't showing in Safari [#477]
- Fixed a bug in `<ld-menu>` where pressing [[Enter]] in a menu didn't work with click handlers
- Reworked `<ld-menu>` and `<ld-menu-item>` to use a roving tab index and improve keyboard accessibility
- Reworked tabbable logic to be more performant [#466]
- Switched component stylesheets from Sass to Lit's template literal styles
- Switched theme stylesheets from Sass to CSS

## 2.0.0-beta.45

This release changes the way component metadata is generated. Previously, the project used TypeDoc to analyze components and generate a very large file with type data. The data was then parsed and converted to an easier-to-consume file called `metadata.json`. Alas, TypeDoc is expensive to run and the metadata format wasn't standard.

Thanks to an amazing effort by [Pascal Schilp](https://twitter.com/passle_), the world has a simpler, faster way to gather metadata using the [Custom Elements Manifest Analyzer](https://github.com/open-wc/custom-elements-manifest). Not only is this tool faster, but the data follows the evolving `custom-elements.json` format. This is exciting because a standard format for custom elements opens the door for many potential uses, including documentation generation, framework adapters, IDE integrations, third-party uses, and more. [Check out Pascal's great article](https://dev.to/open-wc/introducing-custom-elements-manifest-gkk) for more info about `custom-elements.json` and the new analyzer.

The docs have been updated to use the new `custom-elements.json` file. If you're relying on the old `metadata.json` file for any purpose, this will be a breaking change for you.

- 🚨 BREAKING: removed the `ld-overlay-click` event from `<ld-dialog>` and `<ld-drawer>` (use `ld-request-close` instead) [#471]
- 🚨 BREAKING: removed `metadata.json` (use `custom-elements.json` instead)
- Added `custom-elements.json` for component metadata
- Added `ld-request-close` event to `<ld-dialog>` and `<ld-drawer>`
- Added `dialog.denyClose` and `drawer.denyClose` animations
- Fixed a bug in `<ld-color-picker>` where setting `value` immediately wouldn't trigger an update
- Fixed a bug in `<ld-dialog>` and `<ld-drawer>` where setting `open` initially didn't set a focus trap
- Fixed a bug that resulted in form controls having incorrect validity when `disabled` was initially set [#473]
- Fixed a bug in the docs that caused the metadata file to be requested twice
- Fixed a bug where tabbing out of a modal would cause the browser to lag [#466]
- Updated the docs to use the new `custom-elements.json` for component metadata

## 2.0.0-beta.44

- 🚨 BREAKING: all `invalid` props on form controls now reflect validity before interaction [#455]
- Allow `null` to be passed to disable animations in `setDefaultAnimation()` and `setAnimation()`
- Converted build scripts to ESM
- Fixed a bug in `<ld-checkbox>` where `invalid` did not update properly
- Fixed a bug in `<ld-dropdown>` where a `keydown` listener wasn't cleaned up properly
- Fixed a bug in `<ld-select>` where `ld-blur` was emitted prematurely [#456]
- Fixed a bug in `<ld-select>` where no selection with `multiple` resulted in an incorrect value [#457]
- Fixed a bug in `<ld-select>` where `ld-change` was emitted immediately after connecting to the DOM [#458]
- Fixed a bug in `<ld-select>` where non-printable keys would cause the menu to open
- Fixed a bug in `<ld-select>` where `invalid` was not always updated properly
- Reworked the `@watch` decorator to use `update` instead of `updated` resulting in better performance and flexibility

## 2.0.0-beta.43

- Added `?` to optional arguments in methods tables in the docs
- Added the `scrollPosition()` method to `<ld-textarea>` to get/set scroll position
- Added initial tests for `<ld-dialog>`, `<ld-drawer>`, `<ld-dropdown>`, and `<ld-tooltip>`
- Fixed a bug in `<ld-tab-group>` where scrollable tab icons were not displaying correctly
- Fixed a bug in `<ld-dialog>` and `<ld-drawer>` where preventing clicks on the overlay no longer worked as described [#452]
- Fixed a bug in `<ld-dialog>` and `<ld-drawer>` where setting initial focus no longer worked as described [#453]
- Fixed a bug in `<ld-card>` where the `slotchange` listener wasn't attached correctly [#454]
- Fixed lifecycle bugs in a number of components [#451]
- Removed `fill: both` from internal animate utility so styles won't "stick" by default [#450]

## 2.0.0-beta.42

This release addresses an issue with the `open` attribute no longer working in a number of components, as a result of the changes in beta.41. It also removes a small but controversial feature that complicated show/hide logic and led to a poor experience for developers and end users.

There are two ways to show/hide affected components: by calling `show() | hide()` and by toggling the `open` prop. Previously, it was possible to call `event.preventDefault()` in an `ld-show | ld-hide ` handler to stop the component from showing/hiding. The problem becomes obvious when you set `el.open = false`, the event gets canceled, and in the next cycle `el.open` has reverted to `true`. Not only is this unexpected, but it also doesn't play nicely with frameworks. Additionally, this made it impossible to await `show() | hide()` since there was a chance they'd never resolve.

Technical reasons aside, canceling these events seldom led to a good user experience, so the decision was made to no longer allow `ld-show | ld-hide` to be cancelable.

- 🚨 BREAKING: `ld-show` and `ld-hide` events are no longer cancelable
- Added Iconoir example to the icon docs
- Added Web Test Runner
- Added initial tests for `<ld-alert>` and `<ld-details>`
- Changed the `cancelable` default to `false` for the internal `@event` decorator
- Fixed a bug where toggling `open` stopped working in `<ld-alert>`, `<ld-dialog>`, `<ld-drawer>`, `<ld-dropdown>`, and `<ld-tooltip>`
- Fixed a bug in `<ld-range>` where setting a value outside the default `min` or `max` would clamp the value [#448]
- Fixed a bug in `<ld-dropdown>` where placement wouldn't adjust properly when shown [#447]
- Fixed a bug in the internal `shimKeyframesHeightAuto` utility that caused `<ld-details>` to measure heights incorrectly [#445]
- Fixed a number of imports that should have been type imports
- Updated Lit to 2.0.0-rc.2
- Updated esbuild to 0.12.4

## 2.0.0-beta.41

This release changes how components animate. In previous versions, CSS transitions were used for most show/hide animations. Transitions are problematic due to the way `transitionend` works. This event fires once _per transition_, and it's impossible to know which transition to look for when users can customize any possible CSS property. Because of this, components previously required the `opacity` property to transition. If a user were to prevent `opacity` from transitioning, the component wouldn't hide properly and the `ld-after-show|hide` events would never emit.

CSS animations, on the other hand, have a more reliable `animationend` event. Alas, `@keyframes` don't cascade and can't be injected into a shadow DOM via CSS, so there would be no good way to customize them.

The most elegant solution I found was to use the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), which offers more control over animations at the expense of customizations being done in JavaScript. Fortunately, through the [Animation Registry](/getting-started/customizing#animations), you can customize animations globally and/or per component with a minimal amount of code.

- 🚨 BREAKING: changed `left` and `right` placements to `start` and `end` in `<ld-drawer>`
- 🚨 BREAKING: changed `left` and `right` placements to `start` and `end` in `<ld-tab-group>`
- 🚨 BREAKING: removed `--hide-duration`, `--hide-timing-function`, `--show-duration`, and `--show-timing-function` custom properties from `<ld-tooltip>` (use the Animation Registry instead)
- Added the Animation Registry
- Fixed a bug where removing `<ld-dropdown>` from the DOM and adding it back destroyed the popover reference [#443]
- Updated animations for `<ld-alert>`, `<ld-dialog>`, `<ld-drawer>`, `<ld-dropdown>`, and `<ld-tooltip>` to use the Animation Registry instead of CSS transitions
- Improved a11y by respecting `prefers-reduced-motion` for all show/hide animations
- Improved `--show-delay` and `--hide-delay` behavior in `<ld-tooltip>` so they only apply on hover
- Removed the internal popover utility

## 2.0.0-beta.40

- 🚨 BREAKING: renamed `<ld-responsive-embed>` to `<ld-responsive-media>` and added support for images and videos [#436]
- Fixed a bug where setting properties before an element was defined would render incorrectly [#425]
- Fixed a bug that caused all modules to be imported when cherry picking certain components [#439]
- Fixed a bug where the scrollbar would reposition `<ld-dialog>` on hide causing it to jump [#424]
- Fixed a bug that prevented the project from being built in a Windows environment
- Improved a11y in `<ld-progress-ring>`
- Removed `src/utilities/index.ts` to prevent tree-shaking confusion (please import utilities directly from their respective modules)
- Removed global `[hidden]` styles so they don't affect anything outside of components
- Updated to Bootstrap Icons 1.5.0
- Updated React docs to use [`@shoelace-style/react`](https://github.com/leonardo-design-system/react)
- Updated NextJS docs [#434]
- Updated TypeScript to 4.2.4

## 2.0.0-beta.39

- Added experimental `<ld-qr-code>` component
- Added `system` icon library and updated all components to use this instead of the default icon library [#420]
- Updated to esbuild 0.8.57
- Updated to Lit 2.0.0-rc.1 and lit-html 2.0.0-rc.2

## 2.0.0-beta.38

- 🚨 BREAKING: `<ld-radio>` components must be located inside an `<ld-radio-group>` for proper accessibility [#218]
- Added `<ld-radio-group>` component [#218]
- Added `--header-spacing`, `--body-spacing`, and `--footer-spacing` custom properties to `<ld-drawer>` and `<ld-dialog>` [#409]
- Fixed a bug where `<ld-menu-item>` prefix and suffix slots wouldn't always receive the correct spacing
- Fixed a bug where `<ld-badge>` used `--ld-color-white` instead of the correct design tokens [#407]
- Fixed a bug in `<ld-dialog>` and `<ld-drawer>` where the escape key would cause parent components to close
- Fixed a race condition bug in `<ld-icon>` [#410]
- Improved focus trap behavior in `<ld-dialog>` and `<ld-drawer>`
- Improved a11y in `<ld-dialog>` and `<ld-drawer>` by restoring focus to trigger on close
- Improved a11y in `<ld-radio>` with Windows high contrast mode [#215]
- Improved a11y in `<ld-select>` by preventing the chevron icon from being announced
- Internal: removed the `options` argument from the modal utility as focus trapping is now handled internally

## 2.0.0-beta.37

- Added `click()` method to `<ld-checkbox>`, `<ld-radio>`, and `<ld-switch>`
- Added the `activation` attribute to `<ld-tab-group>` to allow for automatic and manual tab activation
- Added `npm run create <tag>` script to scaffold new components faster
- Fixed a bug in `<ld-tooltip>` where events weren't properly cleaned up on disconnect
- Fixed a bug in `<ld-tooltip>` where they wouldn't display after toggling `disabled` off and on again [#391]
- Fixed a bug in `<ld-details>` where `show()` and `hide()` would toggle the control when disabled
- Fixed a bug in `<ld-color-picker>` where setting `value` wouldn't update the control
- Fixed a bug in `<ld-tab-group>` where tabs that are initially disabled wouldn't receive the indicator on activation [#403]
- Fixed incorrect event names for `ld-after-show` and `ld-after-hide` in `<ld-details>`
- Improved a11y for disabled buttons that are rendered as links
- Improved a11y for `<ld-button-group>` by adding the correct `role` attribute
- Improved a11y for `<ld-input>`, `<ld-range>`, `<ld-select>`, and `<ld-textarea>` so labels and helper text are read properly by screen readers
- Removed `ld-show`, `ld-hide`, `ld-after-show`, `ld-after-hide` events from `<ld-color-picker>` (the color picker's visibility cannot be controlled programmatically so these shouldn't have been exposed; the dropdown events now bubble up so you can listen for those instead)
- Reworked `<ld-button-group>` so it doesn't require light DOM styles

## 2.0.0-beta.36

- 🚨 BREAKING: renamed `setFocus()` to `focus()` in button, checkbox, input, menu item, radio, range, rating, select, switch, and tab
- 🚨 BREAKING: renamed `removeFocus()` to `blur()` in button, checkbox, input, menu item, radio, range, rating, select, switch, and tab
- Added `click()` method to `<ld-button>`
- Fixed a bug where toggling `open` on `<ld-drawer>` would skip the transition
- Fixed a bug where `<ld-color-picker>` could be opened when disabled
- Fixed a bug in `<ld-color-picker>` that caused erratic slider behaviors [#388]
- Fixed a bug where `<ld-details>` wouldn't always render the correct height when open initially [#357]
- Renamed `components.json` to `metadata.json`
- Updated to the prerelease versions of LitElement and lit-html
- Updated to Bootstrap Icons 1.4.1

## 2.0.0-beta.35

- Fixed a bug in `<ld-animation>` where `ld-cancel` and `ld-finish` events would never fire
- Fixed a bug where `<ld-alert>` wouldn't always transition properly
- Fixed a bug where using `<ld-menu>` inside a shadow root would break keyboard selections [#382]
- Fixed a bug where toggling `multiple` in `<ld-select>` would lead to a stale display label
- Fixed a bug in `<ld-tab-group>` where changing `placement` could result in the active tab indicator being drawn a few pixels off
- Fixed a bug in `<ld-button>` where link buttons threw an error on focus, blur, and click
- Improved `@watch` decorator to run after update instead of during
- Updated `<ld-menu-item>` checked icon to `check` instead of `check2`
- Upgraded the status of `<ld-resize-observer>` from experimental to stable

## 2.0.0-beta.34

This release changes the way components are registered if you're [cherry picking](/getting-started/installation#cherry-picking) or [using a bundler](/getting-started/installation#bundling). This recommendation came from the LitElement team and simplifies Leonardo's dependency graph. It also eliminates the need to call a `register()` function before using each component.

From now on, importing a component will register it automatically. The caveat is that bundlers may not tree shake the library properly if you import from `@shoelace-style/leonardo`, so the recommendation is to import components and utilities from their corresponding files instead.

- 🚨 BREAKING: removed `all.leonardo.js` (use `leonardo.js` instead)
- 🚨 BREAKING: component modules now have a side effect, so bundlers may not tree shake properly when importing from `@shoelace-style/leonardo` (see the [installation page](/getting-started/installation#bundling) for more details and how to update)
- Added `ld-clear` event to `<ld-select>`
- Fixed a bug where dynamically changing menu items in `<ld-select>` would cause the display label to be blank [#374]
- Fixed a bug where setting the `value` attribute or property on `<ld-input>` and `<ld-textarea>` would trigger validation too soon
- Fixed the margin in `<ld-menu-label>` to align with menu items
- Fixed `autofocus` attributes in `<ld-input>` and `<ld-textarea>`
- Improved types for `autocapitalize` in `<ld-input>` and `<ld-textarea>`
- Reverted the custom `@tag` decorator in favor of `@customElement` to enable auto-registration

## 2.0.0-beta.33

- Fixed a bug where link buttons could have incorrect `target`, `download`, and `rel` props
- Fixed `aria-label` and `aria-labelledby` props in `<ld-dialog>` and `<ld-drawer>`
- Fixed `tabindex` attribute in `<ld-menu>`
- Fixed a bug in `<ld-select>` where tags would always render as pills
- Fixed a bug in `<ld-button>` where calling `setFocus()` would throw an error

## 2.0.0-beta.32

- Added tag name maps so TypeScript can identify Leonardo elements [#371]
- Fixed a bug where the active tab indicator wouldn't render properly on tabs styled with `flex-end` [#355]
- Fixed a bug where `ld-change` wasn't emitted by `<ld-checkbox>` or `<ld-switch>` [#370]
- Fixed a bug where some props weren't being watched correctly in `<ld-alert>` and `<ld-color-picker>`
- Improved `@watch` decorator so watch handlers don't run before the first render
- Removed guards that were added due to previous watch handler behavior

## 2.0.0-beta.31

- Add touch support to `<ld-rating>` [#362]
- Fixed a bug where the `open` attribute on `<ld-details>` would prevent it from opening [#357]
- Fixed event detail type parsing so component class names are shown instead of `default`

## 2.0.0-beta.30

- Fix default exports for all components so cherry picking works again [#365]
- Revert FOUC base style because it interferes with some framework and custom element use cases

## 2.0.0-beta.29

**This release migrates component implementations from Shoemaker to LitElement.** Due to feedback from the community, Leonardo will rely on a more heavily tested library for component implementations. This gives you a more solid foundation and reduces my maintenance burden. Thank you for all your comments, concerns, and encouragement! Aside from that, everything else from beta.28 still applies plus the following.

- 🚨 BREAKING: removed the `symbol` property from `<ld-rating>` and reverted to `getSymbol` for optimal flexibility
- Added `vscode.html-custom-data.json` to the build to support IntelliSense (see [the usage section](/getting-started/usage#code-completion) for details)
- Added a base style to prevent FOUC before components are defined
- Fixed bug where TypeScript types weren't being generated [#364]
- Improved vertical padding in `<ld-tooltip>`
- Moved chunk files into a separate folder
- Reverted menu item active styles
- Updated esbuild to 0.8.54

## 2.0.0-beta.28

**This release includes a major under the hood overhaul of the library and how it's distributed.** Until now, Leonardo was developed with Stencil. This release moves to a lightweight tool called Shoemaker, a homegrown utility that provides declarative templating and data binding while reducing the boilerplate required for said features.

This change in tooling addresses a number of longstanding bugs and limitations. It also gives us more control over the library and build process while streamlining development and maintenance. Instead of two different distributions, Leonardo now offers a single, standards-compliant collection of ES modules. This may affect how you install and use the library, so please refer to the [installation page](/getting-started/installation) for details.

:::warning
Due to the large number of internal changes, I would consider this update to be less stable than previous ones. If you're using Leonardo in a production app, consider holding off until the next beta to allow for more exhaustive testing from the community. Please report any bugs you find on the [issue tracker](https://github.com/leonardo-design-system/leonardo/issues).
:::

The component API remains the same except for the changes noted below. Thanks for your patience as I work diligently to make Leonardo more stable and future-proof. 🙌

- 🚨 BREAKING: removed the custom elements bundle (you can import ES modules directly)
- 🚨 BREAKING: removed `getAnimationNames()` and `getEasingNames()` methods from `<ld-animation>` (you can import them from `utilities/animation.js` instead)
- 🚨 BREAKING: removed the `<ld-icon-library>` component since it required imperative initialization (you can import the `registerIconLibrary()` function from `utilities/icon-library.js` instead)
- 🚨 BREAKING: removed the experimental `<ld-theme>` component due to technical limitations (you should set the `ld-theme-{name}` class on the `<body>` instead)
- 🚨 BREAKING: moved the base stylesheet from `dist/leonardo.css` to `dist/themes/base.css`
- 🚨 BREAKING: moved `icons` into `assets/icons` to make future assets easier to colocate
- 🚨 BREAKING: changed `getSymbol` property in `<ld-rating>` to `symbol` (it now accepts a string or a function that returns an icon name)
- 🚨 BREAKING: renamed `setAssetPath()` to `setBasePath()` and added the ability to set the library's base path with a `data-leonardo` attribute (`setBasePath()` is exported from `utilities/base-path.js`)
- Fixed `min` and `max` types in `<ld-input>` to allow numbers and strings [#330]
- Fixed a bug where `<ld-checkbox>`, `<ld-radio>`, and `<ld-switch>` controls would shrink with long labels [#325]
- Fixed a bug in `<ld-select>` where the dropdown menu wouldn't reposition when the box resized [#340]
- Fixed a bug where ignoring clicks and clicking the overlay would prevent the escape key from closing the dialog/drawer [#344]
- Removed the lazy loading dist (importing `leonardo.js` will load and register all components now)
- Switched from Stencil to Shoemaker
- Switched to a custom build powered by [esbuild](https://esbuild.github.io/)
- Updated to Bootstrap Icons 1.4.0

## 2.0.0-beta.27

- Added `handle-icon` slot to `<ld-image-comparer>` [#311]
- Added `label` and `helpText` props and slots to `<ld-range>` [#318]
- Added "Integrating with NextJS" tutorial to the docs, courtesy of [crutchcorn](https://github.com/crutchcorn)
- Added `content` slot to `<ld-tooltip>` [#322]
- Fixed a bug in `<ld-select>` where removing a tag would toggle the dropdown
- Fixed a bug in `<ld-input>` and `<ld-textarea>` where the input might not exist when the value watcher is called [#313]
- Fixed a bug in `<ld-details>` where hidden elements would receive focus when tabbing [#323]
- Fixed a bug in `<ld-icon>` where `ld-error` would only be emitted for network failures [#326]
- Reduced the default line-height for `<ld-tooltip>`
- Updated `<ld-menu-item>` focus styles
- Updated `<ld-select>` so tags will wrap when `multiple` is true
- Updated to Stencil 2.4.0

## 2.0.0-beta.26

- 🚨 BREAKING: Fixed animations bloat
  - Removed ~400 baked-in Animista animations because they were causing ~200KB of bloat (they can still be used with custom keyframes)
  - Reworked animations into a separate module ([`@shoelace-style/animations`](https://github.com/leonardo-design-system/animations)) so it's more maintainable and animations are sync with the latest version of animate.css
  - Animation and easing names are now camelCase (e.g. `easeInOut` instead of `ease-in-out`)
- Added initial E2E tests [#169]
- Added the `FocusOptions` argument to all components that have a `setFocus()` method
- Added `ld-initial-focus` event to `<ld-dialog>` and `<ld-drawer>` so focus can be customized to a specific element
- Added `close-button` part to `<ld-tab>` so the close button can be customized
- Added `scroll-button` part to `<ld-tab-group>` so the scroll buttons can be customized
- Fixed a bug where `ld-hide` would be emitted twice when closing an alert with `hide()`
- Fixed a bug in `<ld-color-picker>` where the toggle button was smaller than the preview button in Safari
- Fixed a bug in `<ld-tab-group>` where activating a nested tab group didn't work properly [#299]
- Fixed a bug in `<ld-tab-group>` where removing tabs would throw an error
- Fixed a bug in `<ld-alert>`, `<ld-dialog>`, `<ld-drawer>`, `<ld-select>`, and `<ld-tag>` where the close button's base wasn't exported so it couldn't be styled
- Removed `text` type from `<ld-badge>` as it was erroneously copied and never had styles
- Updated `<ld-tab-group>` so the `active` property is reflected to its attribute
- Updated the docs to show dependencies instead of dependents which is much more useful when working with the custom elements bundle
- Updated to Bootstrap Icons 1.3.0

## 2.0.0-beta.25

- 🚨 BREAKING: Reworked color tokens
  - Theme colors are now inspired by Tailwind's professionally-designed color palette
  - Color token variations now range from 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
  - Color token variations were inverted, e.g. 50 is lightest and 950 is darkest
  - All component styles were adapted to use the new color tokens, but visual changes are subtle
  - The dark theme was adapted use the new color tokens
  - HSL is no longer used because it is not perceptually uniform (this may be revisited when all browsers support [LCH colors](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/))
- 🚨 BREAKING: Refactored `<ld-select>` to improve accessibility [#216]
  - Removed the internal `<ld-input>` because it was causing problems with a11y and virtual keyboards
  - Removed `input`, `prefix` and `suffix` parts
- 🚨 BREAKING: Removed `copy-button` part from `<ld-color-picker>` since copying is now done by clicking the preview
- Added `getFormattedValue()` method to `<ld-color-picker>` so you can retrieve the current value in any format
- Added visual separators between solid buttons in `<ld-button-group>`
- Added `help-text` attribute to `<ld-input>`, `<ld-textarea>`, and `<ld-select>`
- Fixed a bug where moving the mouse while `<ld-dropdown>` is closing would remove focus from the trigger
- Fixed a bug where `<ld-menu-item>` didn't set a default color in the dark theme
- Fixed a bug where `<ld-color-picker>` preview wouldn't update in Safari
- Fixed a bug where removing an icon's `name` or `src` wouldn't remove the previously rendered SVG [#285]
- Fixed a bug where disabled link buttons didn't appear disabled
- Improved button spacings and added split button example
- Improved elevation tokens in dark theme
- Improved accessibility in `<ld-tooltip>` by allowing escape to dismiss it [#219]
- Improved slot detection in `<ld-card>`, `<ld-dialog>`, and `<ld-drawer>`
- Made `@types/resize-observer-browser` a dependency so users don't have to install it manually
- Refactored internal label + help text logic into a functional component used by `<ld-input>`, `<ld-textarea>`, and `<ld-select>`
- Removed `ld-blur` and `ld-focus` events from `<ld-menu>` since menus can't have focus as of 2.0.0-beta.22
- Updated `<ld-spinner>` so the indicator is more obvious
- Updated to Bootstrap Icons 1.2.2

## 2.0.0-beta.24

- Added `<ld-format-date>` component
- Added `indeterminate` state to `<ld-progress-bar>` [#274]
- Added `--track-color`, `--indicator-color`, and `--label-color` to `<ld-progress-bar>` [#276]
- Added `allow-scripts` attribute to `<ld-include>` [#280]
- Fixed a bug where `<ld-menu-item>` color variable was incorrect [#272]
- Fixed a bug where `<ld-dialog>` and `<ld-drawer>` would emit the `ld-hide` event twice [#275]
- Fixed a bug where calling `event.preventDefault()` on certain form elements wouldn't prevent `<ld-form>` from submitting [#277]
- Fixed drag handle orientation in `<ld-image-comparer>`
- Restyled `<ld-spinner>` so the track is visible and the indicator is smaller.
- Removed `resize-observer-polyfill` in favor of `@types/resize-observer-browser` since all target browsers support `ResizeObserver`
- Upgraded the status of `<ld-form>`, `<ld-image-comparer>`, and `<ld-include>` from experimental to stable

## 2.0.0-beta.23

- Added `<ld-format-number>` component
- Added `<ld-relative-time>` component
- Added `closable` attribute to `<ld-tab>`
- Added experimental `<ld-resize-observer>` utility
- Added experimental `<ld-theme>` utility and updated theming documentation
- Fixed a bug where `<ld-menu-item>` wouldn't render properly in the dark theme
- Fixed a bug where `<ld-select>` would show an autocomplete menu
- Improved placeholder contrast in dark theme
- Updated to Bootstrap Icons 1.1.0
- Updated to Stencil 2.3.0

## 2.0.0-beta.22

- 🚨 BREAKING: Refactored `<ld-menu>` and `<ld-menu-item>` to improve accessibility by using proper focus states [#217]
  - Moved `tabindex` from `<ld-menu>` to `<ld-menu-item>`
  - Removed the `active` attribute from `<ld-menu-item>` because synthetic focus states are bad for accessibility
  - Removed the `ld-activate` and `ld-deactivate` events from `<ld-menu-item>` (listen for `focus` and `blur` instead)
  - Updated `<ld-select>` so keyboard navigation still works
- Added `no-scroll-controls` attribute to `<ld-tab-group>` [#253]
- Fixed a bug where setting `open` initially wouldn't show `<ld-dialog>` or `<ld-drawer>` [#255]
- Fixed a bug where `disabled` could be set when buttons are rendered as links
- Fixed a bug where hoisted dropdowns would render in the wrong position when placed inside `<ld-dialog>` [#252]
- Fixed a bug where boolean aria attributes didn't explicitly set `true|false` string values in the DOM
- Fixed a bug where `aria-describedby` was never set on tooltip targets in `<ld-tooltip>`
- Fixed a bug where setting `position` on `<ld-image-comparer>` wouldn't update the divider's position
- Fixed a bug where the check icon was announced to screen readers in `<ld-menu-item>`
- Improved `<ld-icon-button>` accessibility by encouraging proper use of `label` and hiding the internal icon from screen readers [#220]
- Improved `<ld-dropdown>` accessibility by attaching `aria-haspopup` and `aria-expanded` to the slotted trigger
- Refactored position logic to remove an unnecessary state variable in `<ld-image-comparer>`
- Refactored design tokens to use `rem` instead of `px` for input height and spacing [#221]
- Removed `console.log` from modal utility
- Updated to Stencil 2.2.0

## 2.0.0-beta.21

- Added `label` slot to `<ld-input>`, `<ld-select>`, and `<ld-textarea>` [#248]
- Added `label` slot to `<ld-dialog>` and `<ld-drawer>`
- Added experimental `<ld-include>` component
- Added status code to the `ld-error` event in `<ld-icon>`
- Fixed a bug where initial transitions didn't show in `<ld-dialog>` and `<ld-drawer>` [#247]
- Fixed a bug where indeterminate checkboxes would maintain the indeterminate state when toggled
- Fixed a bug where concurrent active modals (i.e. dialog, drawer) would try to steal focus from each other
- Improved `<ld-color-picker>` grid and slider handles [#246]
- Refactored `<ld-icon>` request logic and removed unused cache map
- Reworked show/hide logic in `<ld-alert>`, `<ld-dialog>`, and `<ld-drawer>` to not use reflow hacks and the `hidden` attribute
- Reworked slot logic in `<ld-card>`, `<ld-dialog>`, and `<ld-drawer>`
- Updated to Popper 2.5.3 to address a fixed position bug in Firefox

## 2.0.0-beta.20

- 🚨 BREAKING: Transformed all Leonardo events to lowercase ([details](#why-did-event-names-change))
- Added support for dropdowns and non-icon elements to `<ld-input>`
- Added `spellcheck` attribute to `<ld-input>`
- Added `<ld-icon-library>` to allow custom icon library registration
- Added `library` attribute to `<ld-icon>` and `<ld-icon-button>`
- Added "Integrating with Rails" tutorial to the docs, courtesy of [ParamagicDev](https://github.com/ParamagicDev)
- Fixed a bug where `<ld-progress-ring>` rendered incorrectly when zoomed in Safari [#227]
- Fixed a bug where tabbing into slotted elements closes `<ld-dropdown>` when used in a shadow root [#223]
- Fixed a bug where scroll anchoring caused undesirable scrolling when `<ld-details>` are grouped

Leonardo events were updated to use a lowercase, kebab-style naming convention. Instead of event names such as `slChange` and `slAfterShow`, you'll need to use `ld-change` and `ld-after-show` now.

This change was necessary to address a critical issue in frameworks that use DOM templates with declarative event bindings such as `<ld-button @slChange="handler">`. Due to HTML's case-insensitivity, browsers translate attribute names to lowercase, turning `@slChange` into `@slchange`, making it impossible to listen to `slChange`.

While declarative event binding is a non-standard feature, not supporting it would make Leonardo much harder to use in popular frameworks. To accommodate those users and provide a better developer experience, we decided to change the naming convention while Leonardo is still in beta.

The following pages demonstrate why this change was necessary.

- [This Polymer FAQ from Custom Elements Everywhere](https://custom-elements-everywhere.com/#faq-polymer)
- [Vue's Event Names documentation](https://vuejs.org/v2/guide/components-custom-events.html#Event-Names)

## 2.0.0-beta.19

- Added `input`, `label`, `prefix`, `clear-button`, `suffix`, `help-text` exported parts to `<ld-select>` to make the input customizable
- Added toast notifications through the `toast()` method on `<ld-alert>`
- Fixed a bug where mouse events would bubble up when `<ld-button>` was disabled, causing tooltips to erroneously appear
- Fixed a bug where pressing space would open and immediately close `<ld-dropdown>` panels in Firefox
- Fixed a bug where `<ld-tooltip>` would throw an error on init
- Fixed a bug in custom keyframes animation example
- Refactored clear logic in `<ld-input>`

## 2.0.0-beta.18

- Added `name` and `invalid` attribute to `<ld-color-picker>`
- Added support for form submission and validation to `<ld-color-picker>`
- Added touch support to demo resizers in the docs
- Added `<ld-responsive-embed>` component
- Fixed a bug where swapping an animated element wouldn't restart the animation in `<ld-animation>`
- Fixed a bug where the cursor was incorrect when `<ld-select>` was disabled
- Fixed a bug where `slblur` and `slfocus` were emitted twice in `<ld-select>`
- Fixed a bug where clicking on `<ld-menu>` wouldn't focus it
- Fixed a bug in the popover utility where `onAfterShow` would fire too soon
- Fixed a bug where `bottom` and `right` placements didn't render properly in `<ld-tab-group>`
- Improved keyboard logic in `<ld-dropdown>`, `<ld-menu>`, and `<ld-select>`
- Updated `<ld-animation>` to stable
- Updated to Stencil 2.0 (you may need to purge `node_modules` and run `npm install` after pulling)
- Updated entry points in `package.json` to reflect new filenames generated by Stencil 2

## 2.0.0-beta.17

- Added `minlength` and `spellcheck` attributes to `<ld-textarea>`
- Fixed a bug where clicking a tag in `<ld-select>` wouldn't toggle the menu
- Fixed a bug where options where `<ld-select>` options weren't always visible or scrollable
- Fixed a bug where setting `null` on `<ld-input>`, `<ld-textarea>`, or `<ld-select>` would throw an error
- Fixed a bug where `role` was on the wrong element and aria attribute weren't explicit in `<ld-checkbox>`, `<ld-switch>`, and `<ld-radio>`
- Fixed a bug where dynamically adding/removing a slot wouldn't work as expected in `<ld-card>`, `<ld-dialog>`, and `<ld-drawer>`
- Fixed a bug where the value wasn't updated and events weren't emitted when using `setRangeText` in `<ld-input>` and `<ld-textarea>`
- Optimized `hasSlot` utility by using a simpler selector
- Updated Bootstrap Icons to 1.0.0 with many icons redrawn and improved
- Updated contribution guidelines

**Form validation has been reworked and is much more powerful now!**

- The `invalid` attribute now reflects the control's validity as determined by the browser's constraint validation API
- Added `required` to `<ld-checkbox>`, `<ld-select>`, and `<ld-switch>`
- Added `reportValidity()` and `setCustomValidity()` methods to all form controls
- Added validation checking for custom and native form controls to `<ld-form>`
- Added `novalidate` attribute to `<ld-form>` to disable validation
- Removed the `valid` attribute from all form controls
- Removed valid and invalid design tokens and related styles (you can use your own custom styles to achieve this)

## 2.0.0-beta.16

- Added `hoist` attribute to `<ld-color-picker>`, `<ld-dropdown>`, and `<ld-select>` to work around panel clipping
- Added `<ld-format-bytes>` utility component
- Added `clearable` and `required` props to `<ld-select>`
- Added `slclear` event to `<ld-input>`
- Added keyboard support to the preview resizer in the docs
- Fixed a bug where the `aria-selected` state was incorrect in `<ld-menu-item>`
- Fixed a bug where custom properties applied to `<ld-tooltip>` didn't affect show/hide transitions
- Fixed a bug where `--ld-input-color-*` custom properties had no effect on `<ld-input>` and `<ld-textarea>`
- Refactored `<ld-dropdown>` and `<ld-tooltip>` to use positioner elements so panels/tooltips can be customized easier

## 2.0.0-beta.15

- Added `image-comparer` component
- Added `--width`, `--height`, and `--thumb-size` custom props to `<ld-switch>`
- Fixed an `aria-labelledby` attribute typo in a number of components
- Fixed a bug where the `change` event wasn't updating the value in `<ld-input>`
- Fixed a bug where `<ld-color-picker>` had the wrong border color in the dark theme
- Fixed a bug where `<ld-menu-item>` had the wrong color in dark mode when disabled
- Fixed a bug where WebKit's autocomplete styles made inputs looks broken
- Fixed a bug where aria labels were wrong in `<ld-select>`
- Fixed a bug where clicking the label wouldn't focus the control in `<ld-select>`

## 2.0.0-beta.14

- Added dark theme
- Added `--ld-panel-background-color` and `--ld-panel-border-color` tokens
- Added `--tabs-border-color` custom property to `<ld-tab-group>`
- Added `--track-color` custom property to `<ld-range>`
- Added `tag` part to `<ld-select>`
- Updated `package.json` so custom elements imports can be consumed from the root
- Fixed a bug where scrolling dialogs didn't resize properly in Safari
- Fixed a bug where `slshow` and `slhide` would be emitted twice in some components
- Fixed a bug where `custom-elements/index.d.ts` was broken due to an unclosed comment (fixed in Stencil 1.17.3)
- Fixed bug where inputs were not using border radius tokens
- Fixed a bug where the text color was being erroneously set in `<ld-progress-ring>`
- Fixed a bug where `<ld-progress-bar>` used the wrong part name internally for `indicator`
- Removed background color from `<ld-menu>`
- Updated to Stencil 1.17.3

## 2.0.0-beta.13

- Added `slactivate` and `sldeactivate` events to `<ld-menu-item>`
- Added experimental `<ld-animation>` component
- Added shields to documentation
- Fixed a bug where link buttons would have `type="button"`
- Fixed a bug where button groups with tooltips experienced an odd spacing issue in Safari
- Fixed a bug where scrolling in dropdowns/selects didn't work properly on Windows (special thanks to [Trendy](http://github.com/trendy) for helping troubleshoot!)
- Fixed a bug where selecting a menu item in a dropdown would cause Safari to scroll
- Fixed a bug where type to select wouldn't accept symbols
- Moved scrolling logic from `<ld-menu>` to `<ld-dropdown>`

## 2.0.0-beta.12

- Added support for `href`, `target`, and `download` to buttons
- Fixed a bug where buttons would have horizontal spacing in Safari
- Fixed a bug that caused an import resolution error when using Leonardo in a Stencil app

## 2.0.0-beta.11

- Added button group component
- Fixed icon button alignment
- Fixed a bug where focus visible observer wasn't removed from `<ld-details>`
- Replaced the deprecated `componentDidUnload` lifecycle method with `disconnectedCallback` to prevent issues with frameworks

## 2.0.0-beta.10

- Added community page to the docs
- Fixed a bug where many components would erroneously receive an `id` when using the custom elements bundle
- Fixed a bug where tab groups weren't scrollable with the mouse

## 2.0.0-beta.9

- Added the icon button component
- Added the skeleton component
- Added the `typeToSelect` method to menu so type-to-select behavior can be controlled externally
- Added the `pulse` attribute to badge
- Fixed a bug where hovering over select showed the wrong cursor
- Fixed a bug where tabbing into a select control would highlight the label
- Fixed a bug where tabbing out of a select control wouldn't close it
- Fixed a bug where closing dropdowns wouldn't give focus back to the trigger
- Fixed a bug where type-to-select wasn't working after the first letter
- Fixed a bug where clicking on menu items and dividers would steal focus from the menu
- Fixed a bug where the color picker wouldn't parse uppercase values
- Removed the `no-footer` attribute from dialog and drawer (slot detection is automatic, so the attribute is not required)
- Removed `close-icon` slot from alert
- Replaced make-shift icon buttons with `<ld-icon-button>` in alert, dialog, drawer, and tag
- Updated Stencil to 1.17.1
- Switched to jsDelivr for better CDN performance

## 2.0.0-beta.8

- Added the card component
- Added `--focus-ring` custom property to tab
- Fixed a bug where range tooltips didn't appear on iOS
- Fixed constructor bindings so they don't break the custom elements bundle
- Fixed tag color contrast to be AA compliant
- Fixed a bug that made it difficult to vertically align rating
- Fixed a bug where dropdowns would always close on mousedown when inside a shadow root
- Made tag text colors AA compliant
- Promoted badge to stable
- Refactored `:host` variables and moved non-display props to base elements
- Refactored event handler bindings to occur in `connectedCallback` instead of the constructor
- Refactored scroll locking logic to use `Set` instead of an array
- Updated the custom elements bundle documentation and added bundler examples
- Upgraded Stencil to 1.17.0-0 (next) to fix custom elements bundle

## 2.0.0-beta.7

- Added links to version 1 resources to the docs
- Added rating component
- Fixed a bug where some build files were missing
- Fixed clearable tags demo
- Fixed touch icon size in docs

## 2.0.0-beta.6

- Enabled the `dist-custom-elements-bundle` output target
- Fixed a bug where nested form controls were ignored in `<ld-form>`

## 2.0.0-beta.5

- Fixed bug where `npm install` would fail due to postinstall script
- Removed unused dependency

## 2.0.0-beta.4

- Added `pill` variation to badges
- Fixed a bug where all badges had `pointer-events: none`
- Fixed `@since` props to show 2.0 instead of 1.0
- Fixed giant cursors in inputs in Safari
- Fixed color picker input width in Safari
- Fixed initial transitions for drawer, dialog, and popover consumers
- Fixed a bug where dialog, dropdown, and drawer would sometimes not transition in on the first open
- Fixed various documentation typos

## 2.0.0-beta.3

- Fix version in docs
- Remove custom elements bundle

## 2.0.0-beta.2

- Fix quick start and installation URLs
- Switch Docsify theme
- Update line heights tokens

## 2.0.0-beta.1

- Initial release
