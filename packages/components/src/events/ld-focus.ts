type LdFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-focus': LdFocusEvent;
  }
}

export default LdFocusEvent;
