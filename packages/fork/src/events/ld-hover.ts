type LdHoverEvent = CustomEvent<{
  phase: 'start' | 'move' | 'end';
  value: number;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-hover': LdHoverEvent;
  }
}

export default LdHoverEvent;
