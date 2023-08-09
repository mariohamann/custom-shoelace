type LdCancelEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-cancel': LdCancelEvent;
  }
}

export default LdCancelEvent;
