import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--ld-tooltip-arrow-size);
    --arrow-color: var(--ld-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--ld-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--ld-tooltip-border-radius);
    background-color: var(--ld-tooltip-background-color);
    font-family: var(--ld-tooltip-font-family);
    font-size: var(--ld-tooltip-font-size);
    font-weight: var(--ld-tooltip-font-weight);
    line-height: var(--ld-tooltip-line-height);
    color: var(--ld-tooltip-color);
    padding: var(--ld-tooltip-padding);
    pointer-events: none;
  }
`;
