import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
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
 * @event ld-event-name - Emitted as an example.
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

  private readonly localize = new LocalizeController(this);

  /** An example attribute. */
  @property() attr = 'example';

  @watch('example')
  handleExampleChange() {
    // do something
  }

  render() {
    return html` <span class="status-text"><slot>This will be a status text.</slot></span> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ld-status-text': LdStatusText;
  }
}
