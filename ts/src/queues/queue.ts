class Node<T> {
  constructor(public value?: T, public next: Node<T> | null = null) {}
}

export class Queue<T = any> {
  private first: Node<T> | null = null;
  private last: Node<T> | null = null;
  private size = 0;

  constructor(...values: T[]) {
    for (const v of values) this.enqueue(v);
  }

  enqueue(value: T): Queue<T> {
    const node = new Node<T>(value);
    if (this.size) (this.last.next = node), (this.last = node);
    else (this.first = node), (this.last = node);
    this.size++;
    return this;
  }

  dequeue(): T | null {
    if (!this.size) return null;
    const node = this.first;
    if (this.size == 1) (this.first = null), (this.last = null);
    else this.first = node.next;
    this.size--;
    return node.value;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.first.value;
  }

  isEmpty(): boolean {
    return !this.size;
  }

  getSize(): number {
    return this.size;
  }

  printNodes(callback?: (node: Node<T>) => string): void {
    if (this.isEmpty()) console.log('Queue is empty');
    else {
      let current = this.first,
        result = '';
      while (current) {
        // result += current.value + (current.next ? ' -> ' : '');
        result +=
          (callback ? callback(current) : current.value) +
          (current.next ? ' -> ' : '');
        current = current.next;
      }
      console.log(result);
    }
  }
}
