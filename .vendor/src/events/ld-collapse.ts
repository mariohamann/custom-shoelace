type LdCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-collapse': LdCollapseEvent;
  }
}

export default LdCollapseEvent;
