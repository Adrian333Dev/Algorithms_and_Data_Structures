class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(value) {
		this.values.push(value);
		this.bubbleUp();
		return this;
	}

	bubbleUp() {
		let valueIdx = this.values.length - 1;
		let parentIdx = Math.floor((valueIdx - 1) / 2);

		while (this.values[parentIdx] < this.values[valueIdx]) {
			let temp = this.values[valueIdx];
			this.values[valueIdx] = this.values[parentIdx];
			this.values[parentIdx] = temp;
			valueIdx = parentIdx;
			parentIdx = Math.floor((valueIdx - 1) / 2);
		}
	}

	bubbleDown() {
		const len = this.values.length;
		let idx = 0;
		let leftIdx = 2 * idx + 1;
		let rightIdx = 2 * idx + 2;

		let value = this.values[idx];

		const isValid = (idx) => idx < len;
		const isGreater = (idx) => isValid(idx) && this.values[idx] > value;

		while (true) {
			let swapIdx = null;
			let leftValue = this.values[leftIdx];
			let rightValue = this.values[rightIdx];
			if (isGreater(leftIdx) && isGreater(rightIdx))
				swapIdx = leftValue > rightValue ? leftIdx : rightIdx;
			else if (isGreater(leftIdx)) swapIdx = leftIdx;
			else if (isGreater(rightIdx)) swapIdx = rightIdx;
			if (swapIdx === null) break;

			this.values[idx] = this.values[swapIdx];
			this.values[swapIdx] = value;
			idx = swapIdx;
			leftIdx = 2 * idx + 1;
			rightIdx = 2 * idx + 2;

			value = this.values[idx];
		}
	}

	extractMax() {
		if (this.values.length === 0) return;
		else if (this.values.length === 1) return this.values.pop();
		let lastValue = this.values[this.values.length - 1];
		this.values[this.values.length - 1] = this.values[0];
		this.values[0] = lastValue;
		let root = this.values.pop();
		this.bubbleDown();
		return root;
	}
}

// test extractMax

let heap = new MaxBinaryHeap();
[41, 39, 33, 18, 27, 12].forEach((value) => heap.insert(value));
console.log(heap.values); // [41, 39, 33, 18, 27, 12]
console.log(heap.extractMax()); // 41
console.log(heap.values); // [39, 27, 33, 18, 12]
console.log(heap.extractMax()); // 39
console.log(heap.values); // [33, 27, 12, 18]
