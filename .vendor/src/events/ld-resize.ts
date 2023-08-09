type LdResizeEvent = CustomEvent<{ entries: ResizeObserverEntry[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-resize': LdResizeEvent;
  }
}

export default LdResizeEvent;
