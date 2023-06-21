export class MinBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(val) {
		this.values.push(val);
		this.bubbleUp();
		return this;
	}

	remove(val) {
		const idx = this.values.indexOf(val);
		if (idx === -1) return false;
		const end = this.values.pop();
		if (idx === this.values.length - 1) return true;
		this.values[idx] = end;
		this.bubbleUp();
		this.sinkDown();
		return true;
	}

	extractMin() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const el = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (el >= parent) break;
			this.values[parentIdx] = el;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	sinkDown() {
		let idx = 0;
		const len = this.values.length;
		const el = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild, swap = null;
			if (leftChildIdx < len) {
				leftChild = this.values[leftChildIdx];
				if (leftChild < el) swap = leftChildIdx;
			}
			if (rightChildIdx < len) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild < el) ||
					(swap !== null && rightChild < leftChild)
				)
					swap = rightChildIdx;
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = el;
			idx = swap;
		}
	}

	heapify(arr) {
		this.values = arr;
		for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
			this.sinkDown(i);
		}
		return this;
	}
}
