import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--ld-color-primary-50);
    border-color: var(--ld-color-primary-200);
    color: var(--ld-color-primary-800);
  }

  .tag--primary:active > ld-icon-button {
    color: var(--ld-color-primary-600);
  }

  .tag--success {
    background-color: var(--ld-color-success-50);
    border-color: var(--ld-color-success-200);
    color: var(--ld-color-success-800);
  }

  .tag--success:active > ld-icon-button {
    color: var(--ld-color-success-600);
  }

  .tag--neutral {
    background-color: var(--ld-color-neutral-50);
    border-color: var(--ld-color-neutral-200);
    color: var(--ld-color-neutral-800);
  }

  .tag--neutral:active > ld-icon-button {
    color: var(--ld-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--ld-color-warning-50);
    border-color: var(--ld-color-warning-200);
    color: var(--ld-color-warning-800);
  }

  .tag--warning:active > ld-icon-button {
    color: var(--ld-color-warning-600);
  }

  .tag--danger {
    background-color: var(--ld-color-danger-50);
    border-color: var(--ld-color-danger-200);
    color: var(--ld-color-danger-800);
  }

  .tag--danger:active > ld-icon-button {
    color: var(--ld-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--ld-button-font-size-small);
    height: calc(var(--ld-input-height-small) * 0.8);
    line-height: calc(var(--ld-input-height-small) - var(--ld-input-border-width) * 2);
    border-radius: var(--ld-input-border-radius-small);
    padding: 0 var(--ld-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--ld-button-font-size-medium);
    height: calc(var(--ld-input-height-medium) * 0.8);
    line-height: calc(var(--ld-input-height-medium) - var(--ld-input-border-width) * 2);
    border-radius: var(--ld-input-border-radius-medium);
    padding: 0 var(--ld-spacing-small);
  }

  .tag--large {
    font-size: var(--ld-button-font-size-large);
    height: calc(var(--ld-input-height-large) * 0.8);
    line-height: calc(var(--ld-input-height-large) - var(--ld-input-border-width) * 2);
    border-radius: var(--ld-input-border-radius-large);
    padding: 0 var(--ld-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--ld-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--ld-border-radius-pill);
  }
`;
