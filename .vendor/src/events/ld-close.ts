type LdCloseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-close': LdCloseEvent;
  }
}

export default LdCloseEvent;
