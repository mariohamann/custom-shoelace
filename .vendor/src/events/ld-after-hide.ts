type LdAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-after-hide': LdAfterHideEvent;
  }
}

export default LdAfterHideEvent;
