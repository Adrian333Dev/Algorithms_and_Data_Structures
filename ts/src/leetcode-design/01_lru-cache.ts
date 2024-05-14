export class Node {
  constructor(
    public key: number,
    public value: number,
    public prev: Node | null = null,
    public next: Node | null = null
  ) {}
}

class LRUCache {
  private cache = new Map<number, Node>();
  private head: Node | null = null;
  private tail: Node | null = null;

  constructor(private readonly capacity: number) {}

  private deleteFromList(node: Node) {
    if (node.prev) node.prev.next = node.next;
    // if node isn't head then set prev node's next to node's next
    else this.head = node.next; // if node is head then set head to node's next

    if (node.next) node.next.prev = node.prev;
    // if node isn't tail then set next node's prev to node's prev
    else this.tail = node.prev; // if node is tail then set tail to node's prev
  }

  private setListHead(node: Node) {
    node.next = this.head; // set node's next to current head
    node.prev = null; // set node's prev to null
    if (this.head) this.head.prev = node; // if head exists then set head's prev to node
    this.head = node; // set head to node
    if (!this.tail) this.tail = node; // if tail doesn't exist then set tail to node
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.deleteFromList(node);
    this.setListHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.deleteFromList(node);
      this.setListHead(node);
    } else {
      if (this.cache.size === this.capacity) {
        this.cache.delete(this.tail.key);
        this.deleteFromList(this.tail);
      }
      const node = new Node(key, value);
      this.cache.set(key, node);
      this.setListHead(node);
    }
  }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
