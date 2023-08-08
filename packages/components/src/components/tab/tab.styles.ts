import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--ld-font-sans);
    font-size: var(--ld-font-size-small);
    font-weight: var(--ld-font-weight-semibold);
    border-radius: var(--ld-border-radius-medium);
    color: var(--ld-color-neutral-600);
    padding: var(--ld-spacing-medium) var(--ld-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--ld-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--ld-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--ld-focus-ring);
    outline-offset: calc(-1 * var(--ld-focus-ring-width) - var(--ld-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--ld-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--ld-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--ld-font-size-small);
    margin-inline-start: var(--ld-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--ld-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
