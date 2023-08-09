type LdFinishEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-finish': LdFinishEvent;
  }
}

export default LdFinishEvent;
