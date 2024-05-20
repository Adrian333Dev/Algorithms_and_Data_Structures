function canPlaceFlowers(arr: number[], n: number): boolean {
  if (!n) return true;
  let count = 0,
    len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] == 1) i++;
    else if (
      (i === 0 || arr[i - 1] == 0) &&
      (i === len - 1 || arr[i + 1] == 0)
    ) {
      count++, i++;
      if (count === n) return true;
    }
  }
  return false;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0));

class Queue<T> {
  private queue: T[] = [];

  enqueue(value: T): void {
    this.queue.push(value);
  }

  dequeue(): T | undefined {
    return this.queue.pop();
  }

  get size(): number {
    return this.queue.length;
  }

  peek(): T | undefined {
    return this.size && this.queue[this.size - 1];
  }
}
