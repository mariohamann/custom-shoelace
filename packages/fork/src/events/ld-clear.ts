type LdClearEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-clear': LdClearEvent;
  }
}

export default LdClearEvent;
