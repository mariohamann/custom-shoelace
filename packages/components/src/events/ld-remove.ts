type LdRemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-remove': LdRemoveEvent;
  }
}

export default LdRemoveEvent;
