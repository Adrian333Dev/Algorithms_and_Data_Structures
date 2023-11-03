class DynamicArray {
	/**
	 * @constructor
	 * @param {number} capacity
	 */
	constructor(capacity = 10) {
		this.values = new Array(capacity);
		this.size = 0;
	}

	/**
	 * @param {number} i
	 * @returns {number}
	 */
	get(i) {
		if (i < 0 || i >= this.size) throw new Error('Invalid Index');
		return this.values[i];
	}

	/**
	 * @param {number} i
	 * @param {number} n
	 * @returns {void}
	 */
	set(i, n) {
		if (i < 0 || i > this.values.length - 1) throw new Error('Invalid Index');
		this.values[i] = n;
		if (i >= this.size) this.size = i + 1;
	}

	/**
	 * @param {number} n
	 * @returns {void}
	 */
	pushback(n) {
		if (this.size === this.values.length) this.resize();
		this.values[this.size] = n;
		this.size++;
	}

	/**
	 * @returns {number}
	 */
	popback() {
    if (this.size === 0) throw new Error('Array is Empty');
    const val = this.values[this.size - 1];
    this.values[this.size - 1] = null;
		this.size--;
		return val;
	}

	/**
	 * @returns {void}
	 */
	resize() {
		let len = this.values.length;
		let newArr = new Array(len * 2);
		for (let i = 0; i < len; i++) newArr[i] = this.values[i];
		this.values = newArr;
	}

	/**
	 * @returns {number}
	 */
	getSize() {
		return this.size;
	}

	/**
	 * @returns {number}
	 */
	getCapacity() {
		return this.values.length;
  }
  
  getValues() {
    return this.values;
  }
}

// TEST

function logStats(arr) {
  console.log('size', arr.getSize()); // 4
  console.log('capacity', arr.getCapacity()); // 5
  console.log(arr.getValues()); // [1, 2, 5, 4, null]
}

let arr = new DynamicArray(5);
// logStats(arr);
arr.pushback(1);
arr.pushback(2);
arr.pushback(3);
arr.pushback(4);
arr.pushback(5);
arr.pushback(6);

// logStats(arr);

// console.log(arr.get(0)); // 1
// console.log(arr.get(1)); // 2
// console.log(arr.get(2)); // 3

arr.set(2, 5);
logStats(arr);


console.log(arr.popback()); // 6
console.log(arr.popback()); // 5
logStats(arr);
