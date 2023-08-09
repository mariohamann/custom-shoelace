type LdInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-initial-focus': LdInitialFocusEvent;
  }
}

export default LdInitialFocusEvent;
