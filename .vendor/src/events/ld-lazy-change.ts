type LdLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-lazy-change': LdLazyChangeEvent;
  }
}

export default LdLazyChangeEvent;
