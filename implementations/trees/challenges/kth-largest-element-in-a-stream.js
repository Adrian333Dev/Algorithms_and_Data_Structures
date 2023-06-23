/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
	constructor(k, nums) {
		this.k = k;
		this.heap = new MinBinaryHeap(k);
		this.heap.heapify(nums);
	}
	/**
	 * @param {number} val
	 * @return {number}
	 */
	add(val) {
		this.heap.push(val);
		console.log(this.heap.values);
		return this.heap.getMin();
	}
}

export class MinBinaryHeap {
	constructor(capacity = 100) {
		this.capacity = capacity + 1;
		this.values = [0];
	}

	push(val) {
		this.values.push(val);
		this.percolateUp();
		// if (this.values.length > this.capacity) this.pop();
		return this;
	}

	pop() {
		if (this.values.length === 1) return;
		if (this.values.length === 2) return this.values.pop();
		this.swap(1, this.values.length - 1);
		const min = this.values.pop();
		this.percolateDown();
		return min;
	}

	heapify(arr) {
		this.values = [0, ...arr];
		for (let i = Math.floor(this.size / 2); i > 0; i--) this.percolateDown(i);
		while (this.values.length > this.capacity) this.pop();
		return this;
	}

	getMin() {
		return this.values[1];
	}

	parent(i) {
		return Math.floor(i / 2);
	}

	left(i) {
		return 2 * i;
	}

	right(i) {
		return 2 * i + 1;
	}

	swap(i, j) {
		[this.values[i], this.values[j]] = [this.values[j], this.values[i]];
	}

	percolateUp() {
		let arr = this.values,
			i = arr.length - 1,
			p = this.parent(i);
		while (p > 0 && arr[i] < arr[p])
			this.swap(i, p), (i = p), (p = this.parent(i));
	}

	percolateDown() {
		let arr = this.values,
			i = 1,
			l = this.left(i),
			r = this.right(i);
		while (l < arr.length) {
			let min = l;
			if (r < arr.length && arr[r] < arr[l]) min = r;
			if (arr[i] < arr[min]) break;
			this.swap(i, min), (i = min), (l = this.left(i)), (r = this.right(i));
		}
	}
}


// test
let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // returns 4