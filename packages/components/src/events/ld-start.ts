type LdStartEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-start': LdStartEvent;
  }
}

export default LdStartEvent;
