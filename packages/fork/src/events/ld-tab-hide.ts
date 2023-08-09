type LdTabHideEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-tab-hide': LdTabHideEvent;
  }
}

export default LdTabHideEvent;
