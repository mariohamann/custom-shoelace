type LdErrorEvent = CustomEvent<{ status?: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-error': LdErrorEvent;
  }
}

export default LdErrorEvent;
