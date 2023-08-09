import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles.js';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--ld-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--ld-input-font-family);
    font-weight: var(--ld-input-font-weight);
    letter-spacing: var(--ld-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--ld-transition-fast) color, var(--ld-transition-fast) border, var(--ld-transition-fast) box-shadow,
      var(--ld-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--ld-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--ld-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--ld-spacing-2x-small);
  }

  .select__tags::slotted(ld-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(ld-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--ld-input-background-color);
    border: solid var(--ld-input-border-width) var(--ld-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--ld-input-background-color-disabled);
    border-color: var(--ld-input-border-color-disabled);
    color: var(--ld-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--ld-input-background-color-focus);
    border-color: var(--ld-input-border-color-focus);
    box-shadow: 0 0 0 var(--ld-focus-ring-width) var(--ld-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--ld-input-filled-background-color);
    color: var(--ld-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--ld-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--ld-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--ld-input-filled-background-color-focus);
    outline: var(--ld-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--ld-input-border-radius-small);
    font-size: var(--ld-input-font-size-small);
    min-height: var(--ld-input-height-small);
    padding-block: 0;
    padding-inline: var(--ld-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--ld-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--ld-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--ld-input-border-radius-medium);
    font-size: var(--ld-input-font-size-medium);
    min-height: var(--ld-input-height-medium);
    padding-block: 0;
    padding-inline: var(--ld-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--ld-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--ld-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--ld-input-border-radius-large);
    font-size: var(--ld-input-font-size-large);
    min-height: var(--ld-input-height-large);
    padding-block: 0;
    padding-inline: var(--ld-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--ld-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--ld-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--ld-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--ld-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--ld-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--ld-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--ld-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--ld-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--ld-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--ld-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--ld-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--ld-font-sans);
    font-size: var(--ld-font-size-medium);
    font-weight: var(--ld-font-weight-normal);
    box-shadow: var(--ld-shadow-large);
    background: var(--ld-panel-background-color);
    border: solid var(--ld-panel-border-width) var(--ld-panel-border-color);
    border-radius: var(--ld-border-radius-medium);
    padding-block: var(--ld-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(ld-divider) {
    --spacing: var(--ld-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--ld-font-size-small);
    font-weight: var(--ld-font-weight-semibold);
    color: var(--ld-color-neutral-500);
    padding-block: var(--ld-spacing-x-small);
    padding-inline: var(--ld-spacing-x-large);
  }
`;
