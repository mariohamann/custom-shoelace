type LdTabShowEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-tab-show': LdTabShowEvent;
  }
}

export default LdTabShowEvent;
