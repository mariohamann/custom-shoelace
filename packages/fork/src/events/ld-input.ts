type LdInputEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-input': LdInputEvent;
  }
}

export default LdInputEvent;
