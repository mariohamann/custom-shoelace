import { html } from 'lit';
import { property } from 'lit/decorators.js';
import LeonardoElement from '../../internal/leonardo-element.js';
import styles from './status-text.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://leonardo.style/components/status-text
 * @status experimental
 * @since 2.0
 *
 * @dependency ld-example
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class LdStatusText extends LeonardoElement {
  static styles: CSSResultGroup = styles;

  /** An example attribute. */
  @property() attr = 'example';

  render() {
    return html` <span class="status-text"><slot>This will be a status text.</slot></span> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ld-status-text': LdStatusText;
  }
}
