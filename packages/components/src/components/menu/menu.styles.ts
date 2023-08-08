import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    background: var(--ld-panel-background-color);
    border: solid var(--ld-panel-border-width) var(--ld-panel-border-color);
    border-radius: var(--ld-border-radius-medium);
    padding: var(--ld-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(ld-divider) {
    --spacing: var(--ld-spacing-x-small);
  }
`;
