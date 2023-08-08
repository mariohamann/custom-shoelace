type LdAfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-after-expand': LdAfterExpandEvent;
  }
}

export default LdAfterExpandEvent;
