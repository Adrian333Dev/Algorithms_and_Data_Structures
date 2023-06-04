class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

export class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}

	dequeue() {
		if (this.length === 0) return null;
		const dequeuedNode = this.first;
		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else this.first = dequeuedNode.next;

		this.length--;
		return dequeuedNode.value;
	}

	peek() {
		return this.first;
	}

	isEmpty() {
		return this.length === 0;
	}
}
