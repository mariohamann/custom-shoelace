import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .status-text {
    color: var(--ld-color-orange-500);
  }
`;
