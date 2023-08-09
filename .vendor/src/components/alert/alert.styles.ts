import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--ld-panel-background-color);
    border: solid var(--ld-panel-border-width) var(--ld-panel-border-color);
    border-top-width: calc(var(--ld-panel-border-width) * 3);
    border-radius: var(--ld-border-radius-medium);
    font-family: var(--ld-font-sans);
    font-size: var(--ld-font-size-small);
    font-weight: var(--ld-font-weight-normal);
    line-height: 1.6;
    color: var(--ld-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ld-font-size-large);
    padding-inline-start: var(--ld-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--ld-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--ld-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--ld-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--ld-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--ld-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--ld-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--ld-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--ld-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--ld-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--ld-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--ld-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ld-font-size-medium);
    padding-inline-end: var(--ld-spacing-medium);
  }
`;
