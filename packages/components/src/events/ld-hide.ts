type LdHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-hide': LdHideEvent;
  }
}

export default LdHideEvent;
