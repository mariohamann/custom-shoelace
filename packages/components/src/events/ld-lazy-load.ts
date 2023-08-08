type LdLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-lazy-load': LdLazyLoadEvent;
  }
}

export default LdLazyLoadEvent;
