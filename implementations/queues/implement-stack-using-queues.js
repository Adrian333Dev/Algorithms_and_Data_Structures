class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Queue {
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
		const temp = this.first;
		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		this.length--;
		return temp.value;
	}
}

class MyStack {
	constructor() {
		this.queue = new Queue();
	}

	push(x) {
		this.queue.enqueue(x);

		let i = 1;
		while (i < this.queue.length) {
			const first = this.queue.dequeue();
			this.queue.enqueue(first);
			i++;
		}
	}

	pop() {
		return this.queue.dequeue();
	}

	top() {
		return this.queue.first.value;
	}

	empty() {
		console.log(this.queue.length);
		return this.queue.length === 0;
	}
}
