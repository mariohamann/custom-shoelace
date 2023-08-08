type LdLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-load': LdLoadEvent;
  }
}

export default LdLoadEvent;
