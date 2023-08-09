import type LdTreeItem from '../components/tree-item/tree-item';

type LdSelectionChangeEvent = CustomEvent<{ selection: LdTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'ld-selection-change': LdSelectionChangeEvent;
  }
}

export default LdSelectionChangeEvent;
