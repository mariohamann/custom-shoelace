type LdBlurEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-blur': LdBlurEvent;
  }
}

export default LdBlurEvent;
