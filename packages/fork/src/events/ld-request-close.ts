type LdRequestCloseEvent = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-request-close': LdRequestCloseEvent;
  }
}

export default LdRequestCloseEvent;
