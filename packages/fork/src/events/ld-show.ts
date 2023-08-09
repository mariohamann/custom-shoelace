type LdShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-show': LdShowEvent;
  }
}

export default LdShowEvent;
