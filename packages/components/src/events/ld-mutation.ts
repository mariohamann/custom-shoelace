type LdMutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-mutation': LdMutationEvent;
  }
}

export default LdMutationEvent;
