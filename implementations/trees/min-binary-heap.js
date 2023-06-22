export class MinBinaryHeap {
	constructor() {
		this.values = [0];
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

	getMin() {
		return this.values[1];
	}

	push(val) {
		this.values.push(val);
		this.percolateUp();
		// console.log(this.values.join(' '));
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

	percolateUp() {
		let arr = this.values, i = arr.length - 1, p = this.parent(i);
		while (p > 0 && arr[i] < arr[p])
			this.swap(i, p), (i = p), (p = this.parent(i));
	}

	percolateDown() {
		let arr = this.values, i = 1, l = this.left(i), r = this.right(i);
		while (l < arr.length) {
			let min = l;
			if (r < arr.length && arr[r] < arr[l]) min = r;
			if (arr[i] < arr[min]) break;
			this.swap(i, min), (i = min), (l = this.left(i)), (r = this.right(i));
		}
	}
}

// tests
const heap = new MinBinaryHeap();
heap.push(5).push(3).push(7).push(1).push(2).push(4).push(6);
console.log(
	heap.values.join(' ') === '0 1 2 3 5 4 7 6' ? 'PASS' : heap.values.join(' ')
);
heap.pop();
console.log(
	heap.values.join(' ') === '0 2 4 3 5 6 7' ? 'PASS' : heap.values.join(' ')
);
heap.pop();
console.log(
	heap.values.join(' ') === '0 3 4 7 5 6' ? 'PASS' : heap.values.join(' ')
);
