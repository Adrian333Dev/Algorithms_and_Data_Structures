class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

// export class PriorityQueue {
// 	constructor() {
// 		this.values = [];
// 	}

// 	enqueue(value, priority) {
// 		const newNode = new Node(value, priority);
// 		this.values.push(newNode);
// 		this.bubbleUp();
// 		return this;
// 	}

// 	bubbleUp() {
// 		let valueIdx = this.values.length - 1;
// 		let parentIdx = Math.floor((valueIdx - 1) / 2);

// 		while (
// 			this.values[parentIdx] &&
// 			this.values[parentIdx].priority > this.values[valueIdx].priority
// 		) {
// 			let temp = this.values[valueIdx];
// 			this.values[valueIdx] = this.values[parentIdx];
// 			this.values[parentIdx] = temp;
// 			valueIdx = parentIdx;
// 			parentIdx = Math.floor((valueIdx - 1) / 2);
// 		}
// 	}

// 	bubbleDown() {
// 		const len = this.values.length;
// 		let idx = 0;
// 		let leftIdx = 2 * idx + 1;
// 		let rightIdx = 2 * idx + 2;

// 		let value = this.values[idx];

// 		const isValid = (idx) => idx < len;
// 		const isHigherPriority = (idx) =>
// 			isValid(idx) && this.values[idx].priority < value.priority;

// 		while (true) {
// 			let swapIdx = null;
// 			let leftValue = this.values[leftIdx];
// 			let rightValue = this.values[rightIdx];
// 			if (isHigherPriority(leftIdx) && isHigherPriority(rightIdx))
// 				swapIdx = leftValue.priority > rightValue.priority ? leftIdx : rightIdx;
// 			else if (isHigherPriority(leftIdx)) swapIdx = leftIdx;
// 			else if (isHigherPriority(rightIdx)) swapIdx = rightIdx;
// 			if (swapIdx === null) break;

// 			this.values[idx] = this.values[swapIdx];
// 			this.values[swapIdx] = value;
// 			idx = swapIdx;
// 			leftIdx = 2 * idx + 1;
// 			rightIdx = 2 * idx + 2;

// 			value = this.values[idx];
// 		}
// 	}

const top = 0;
const parent = (i) => ((i + 1) >>> 1) - 1;
const left = (i) => (i << 1) + 1;
const right = (i) => (i + 1) << 1;

class PriorityQueue {
	constructor(comparator = (a, b) => a > b) {
		this._heap = [];
		this._comparator = comparator;
	}
	size() {
		return this._heap.length;
	}
	isEmpty() {
		return this.size() == 0;
	}
	peek() {
		return this._heap[top];
	}
	push(...values) {
		values.forEach((value) => {
			this._heap.push(value);
			this._siftUp();
		});
		return this.size();
	}
	pop() {
		const poppedValue = this.peek();
		const bottom = this.size() - 1;
		if (bottom > top) {
			this._swap(top, bottom);
		}
		this._heap.pop();
		this._siftDown();
		return poppedValue;
	}
	replace(value) {
		const replacedValue = this.peek();
		this._heap[top] = value;
		this._siftDown();
		return replacedValue;
	}
	_greater(i, j) {
		return this._comparator(this._heap[i], this._heap[j]);
	}
	_swap(i, j) {
		[this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
	}
	_siftUp() {
		let node = this.size() - 1;
		while (node > top && this._greater(node, parent(node))) {
			this._swap(node, parent(node));
			node = parent(node);
		}
	}
	_siftDown() {
		let node = top;
		while (
			(left(node) < this.size() && this._greater(left(node), node)) ||
			(right(node) < this.size() && this._greater(right(node), node))
		) {
			let maxChild =
				right(node) < this.size() && this._greater(right(node), left(node))
					? right(node)
					: left(node);
			this._swap(node, maxChild);
			node = maxChild;
		}
	}
}

// 	dequeue() {
// 		if (this.values.length === 0) return;
// 		else if (this.values.length === 1) return this.values.pop();
// 		let lastValue = this.values[this.values.length - 1];
// 		this.values[this.values.length - 1] = this.values[0];
// 		this.values[0] = lastValue;
// 		const removed = this.values.pop();
// 		this.bubbleDown();
// 		return removed;
// 	}

// 	print() {
// 		console.log(this.values);
// 	}

// 	isEmpty() {
// 		return this.values.length === 0;
// 	}

// 	peek() {
// 		return this.values[0];
// 	}
// }

// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('common cold', 5); // 0
// priorityQueue.enqueue('gunshot wound', 1); // 1
// priorityQueue.enqueue('high fever', 4); // 2
// priorityQueue.enqueue('broken arm', 2); // 3
// priorityQueue.enqueue('glass in foot', 3); // 4

// console.log(priorityQueue.dequeue()); // gunshot wound
// console.log(priorityQueue.dequeue()); // broken arm
// console.log(priorityQueue.dequeue()); // glass in foot
// console.log(priorityQueue.dequeue()); // high fever
// console.log(priorityQueue.dequeue()); // common cold
// console.log(priorityQueue.dequeue()); // undefined
