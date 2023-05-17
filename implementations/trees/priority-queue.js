class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		const newNode = new Node(value, priority);
		this.values.push(newNode);
		this.bubbleUp();
		return this;
	}

	bubbleUp() {
		let valueIdx = this.values.length - 1;
		let parentIdx = Math.floor((valueIdx - 1) / 2);

		while (
			this.values[parentIdx] &&
			this.values[parentIdx].priority > this.values[valueIdx].priority
		) {
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
		const isHigherPriority = (idx) =>
			isValid(idx) && this.values[idx].priority < value.priority;

		while (true) {
			let swapIdx = null;
			let leftValue = this.values[leftIdx];
			let rightValue = this.values[rightIdx];
			if (isHigherPriority(leftIdx) && isHigherPriority(rightIdx))
				swapIdx = leftValue.priority > rightValue.priority ? leftIdx : rightIdx;
			else if (isHigherPriority(leftIdx)) swapIdx = leftIdx;
			else if (isHigherPriority(rightIdx)) swapIdx = rightIdx;
			if (swapIdx === null) break;

			this.values[idx] = this.values[swapIdx];
			this.values[swapIdx] = value;
			idx = swapIdx;
			leftIdx = 2 * idx + 1;
			rightIdx = 2 * idx + 2;

			value = this.values[idx];
		}
	}

	dequeue() {
		if (this.values.length === 0) return;
		else if (this.values.length === 1) return this.values.pop();
		let lastValue = this.values[this.values.length - 1];
		this.values[this.values.length - 1] = this.values[0];
		this.values[0] = lastValue;
		const removed = this.values.pop();
		this.bubbleDown();
		return removed;
	}

	print() {
		console.log(this.values);
	}

	isEmpty() {
		return this.values.length === 0;
	}

	peek() {
		return this.values[0];
	}
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('common cold', 5); // 0
priorityQueue.enqueue('gunshot wound', 1); // 1
priorityQueue.enqueue('high fever', 4); // 2
priorityQueue.enqueue('broken arm', 2); // 3
priorityQueue.enqueue('glass in foot', 3); // 4

console.log(priorityQueue.dequeue()); // gunshot wound
console.log(priorityQueue.dequeue()); // broken arm
console.log(priorityQueue.dequeue()); // glass in foot
console.log(priorityQueue.dequeue()); // high fever
console.log(priorityQueue.dequeue()); // common cold
console.log(priorityQueue.dequeue()); // undefined
