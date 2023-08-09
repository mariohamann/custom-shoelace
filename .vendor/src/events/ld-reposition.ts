type LdRepositionEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-reposition': LdRepositionEvent;
  }
}

export default LdRepositionEvent;
