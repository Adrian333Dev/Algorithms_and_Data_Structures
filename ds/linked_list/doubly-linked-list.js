class Node {
	constructor(val, prev = null, next = null) {
		this.val = val;
		this.prev = prev;
		this.next = next;
	}
}

class DoublyLinkedList {
	constructor(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		if (val) push(val);
	}

	get(index) {
		if (index >= this.length) return null;
		else if (index === 0) return this.head;
		else if (index === this.length - 1) return this.tail;
		else {
			let i = 0;
			let currItem = this.head;
			while (i < index) {
				currItem = currItem.next;
				i++;
			}
			return currItem;
		}
	}

	push(val) {
		if (this.length === 0) this.addToEmptyList(val);
		else {
			const node = new Node(val);
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
			this.length++;
		}
		return this;
	}

	pop() {
		if (this.length === 0) return;
		const nodeToRemove = Object.assign({}, this.tail);
		this.tail = this.tail.prev;
		this.tail.next = null;
		this.length--;
		return nodeToRemove;
	}

	unshift(val) {
		if (this.length === 0) this.addToEmptyList(val);
		else {
			const node = new Node(val);
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
			this.length++;
		}
		return this;
	}

	shift() {
		if (this.length === 0) return;
		const nodeToRemove = Object.assign({}, this.head);
		if (this.length <= 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
		} else {
			this.head = this.head.next;
			this.length--;
		}
		return nodeToRemove;
	}

	set(index, val) {
		if (index > this.length) return false;
		else if (index === this.length) {
			this.push(val);
			return this.tail;
		} else {
			let currItem = this.get(index);
			currItem.val = val;
			return true;
		}
	}

	insert(index, value) {
		if (index >= this.length) return false;
		else if (index === 0) this.unshift(value);
		else if (index === this.length) this.push(value);
		else {
			let itemAtIndex = this.get(index);
			const newNode = new Node(val, itemAtIndex.prev, itemAtIndex);
			itemAtIndex.prev.next = newNode;
			itemAtIndex.prev = newNode;
		}
		return true;
	}

	remove(index) {
		if (index >= this.length) return;
		else if (index === this.length - 1) {
			this.pop();
			return this.tail;
		} else if (index === 0) {
			this.shift();
			return this.head;
		} else {
			let currItem = this.get(index);
			let prev = currItem.prev;
			let next = currItem.next;
			prev.next = next;
			next.prev = prev;
			this.length--;
			return currItem;
		}
	}

	reverse() {
		let i = 0;
		let curr = this.head;
		let head = curr;
		while (i < this.length) {
			let next = curr.next;
			curr.next = curr.prev;
			curr.prev = curr.next;
			curr = next;
			i++;
		}
		this.head = this.tail;
		this.tail = head;
		return this;
	}

	printAll() {
		let curr = this.head;
		while (curr) {
			console.log(curr.val);
			curr = curr.next;
		}

		console.log(
			`length: ${this.length}`,
			`head: ${this.head.val}`,
			`tail: ${this.tail.val}`
		);
	}

	addToEmptyList(val) {
		const node = new Node(val);
		this.head = node;
		this.tail = node;
		this.length = 1;
	}
}

// test reverse
const list = new DoublyLinkedList();
list.push(1).push(2).push(3).push(4).push(5);
list.printAll();

list.reverse();
list.printAll();
