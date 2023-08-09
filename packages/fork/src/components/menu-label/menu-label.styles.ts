import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--ld-font-sans);
    font-size: var(--ld-font-size-small);
    font-weight: var(--ld-font-weight-semibold);
    line-height: var(--ld-line-height-normal);
    letter-spacing: var(--ld-letter-spacing-normal);
    color: var(--ld-color-neutral-500);
    padding: var(--ld-spacing-2x-small) var(--ld-spacing-x-large);
    user-select: none;
  }
`;
