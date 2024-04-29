import { DLLNode } from '../utils/nodes';

type Node = DLLNode<number>;

class LRUCache {
  private cache = new Map<number, Node>();
  private head: Node | null = null;
  private tail: Node | null = null;
  private size = 0;

  constructor(private capacity: number) {}

  get(key: number): number {
    const node = this.cache.get(key);
    if (node) {
      return node.value;
    }
    return -1;
  }

  put(key: number, value: number): void {}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
