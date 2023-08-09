type LdInvalidEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-invalid': LdInvalidEvent;
  }
}

export default LdInvalidEvent;
