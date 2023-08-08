type LdChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-change': LdChangeEvent;
  }
}

export default LdChangeEvent;
