type LdAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-after-show': LdAfterShowEvent;
  }
}

export default LdAfterShowEvent;
