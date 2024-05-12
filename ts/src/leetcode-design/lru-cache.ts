export class Node {
  constructor(
    public value: number,
    public prev: Node | null = null,
    public next: Node | null = null
  ) {}
}

class LRUCache {
  private cache = new Map<number, Node>();
  private size = 0;

  constructor(private capacity: number) {}

  get(key: number): number {
    const value = this.cache.get(key);
    if (value === undefined) return -1;
  }

  put(key: number, value: number): void {}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
