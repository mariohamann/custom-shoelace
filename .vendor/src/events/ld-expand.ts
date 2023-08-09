type LdExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-expand': LdExpandEvent;
  }
}

export default LdExpandEvent;
