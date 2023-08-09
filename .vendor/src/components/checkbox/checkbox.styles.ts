import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--ld-input-font-family);
    font-weight: var(--ld-input-font-weight);
    color: var(--ld-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--ld-toggle-size-small);
    font-size: var(--ld-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--ld-toggle-size-medium);
    font-size: var(--ld-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--ld-toggle-size-large);
    font-size: var(--ld-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--ld-input-border-width) var(--ld-input-border-color);
    border-radius: 2px;
    background-color: var(--ld-input-background-color);
    color: var(--ld-color-neutral-0);
    transition: var(--ld-transition-fast) border-color, var(--ld-transition-fast) background-color,
      var(--ld-transition-fast) color, var(--ld-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--ld-input-border-color-hover);
    background-color: var(--ld-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--ld-focus-ring);
    outline-offset: var(--ld-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--ld-color-primary-600);
    background-color: var(--ld-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--ld-color-primary-500);
    background-color: var(--ld-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--ld-focus-ring);
    outline-offset: var(--ld-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--ld-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--ld-input-required-content);
    margin-inline-start: var(--ld-input-required-content-offset);
  }
`;
