import type LdMenuItem from '../components/menu-item/menu-item';

type LdSelectEvent = CustomEvent<{ item: LdMenuItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-select': LdSelectEvent;
  }
}

export default LdSelectEvent;
