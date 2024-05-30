class RandomizedSet {
  private map = new Map<number, number>();
  private arr: number[] = [];
  constructor() {}

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.map.set(val, this.arr.length), this.arr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;
    const [i, lastVal] = [this.map.get(val), this.arr[this.arr.length - 1]];
    (this.arr[i] = lastVal), this.arr.pop();
    this.map.set(lastVal, i), this.map.delete(val);
    return true;
  }

  getRandom(): number {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const obj = new RandomizedSet();
// console.log(obj.insert(2)); // true
// console.log(obj.insert(2)); // false
// console.log(obj.insert(3)); // true
// console.log(obj.insert(4)); // true
// console.log(obj.getRandom()); // 2/3/4
// console.log(obj.getRandom()); // 2/3/4
// console.log(obj.getRandom()); // 2/3/4
// console.log(obj.remove(3)); // true;
// console.log(obj.remove(7)); // false;
// console.log(obj.remove(3)); // false;
// console.log(obj.getRandom()); // 2/4

// ["RandomizedSet","remove","remove","insert","getRandom","remove","insert"]
// [[],[0],[0],[0],[],[0],[0]]
