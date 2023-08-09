type LdAfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-after-collapse': LdAfterCollapseEvent;
  }
}

export default LdAfterCollapseEvent;
