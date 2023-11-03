class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	/**
	 * @param {number} index
	 * @return {number}
	 */
	get(index) {
		if (index >= this.length || index < 0) return -1;
		if (index === this.length - 1) return this.tail.val;
		if (index === 0) return this.head.val;
		let curr = this.head;
		while (index-- > 0) (curr = curr.next);
		return curr.val;
	}

	insertToEmptyList(val) {
		this.head = new Node(val);
		this.tail = this.head;
		this.length++;
	}

	rmFromEmptyList(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		return true;
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	insertHead(val) {
		if (!this.length) this.insertToEmptyList(val);
		else (this.head = new Node(val, this.head)), this.length++;
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	insertTail(val) {
		if (!this.length) this.insertToEmptyList(val);
		else
			(this.tail.next = new Node(val)),
				(this.tail = this.tail.next),
				this.length++;
	}

	removeHead() {
		this.head = this.head.next;
		this.length--;
		return true;
	}

	removeTail() {
		let curr = this.head;
		while (curr.next.next) curr = curr.next;
		this.tail = curr;
		this.tail.next = null;
		this.length--;
		return true;
	}

	/**
	 * @param {number} index
	 * @return {boolean}
	 */
	remove(index) {
		if (!this.length || index >= this.length) return false;
		if (this.length === 1) return this.rmFromEmptyList();
		if (index === 0) return this.removeHead();
		if (index === this.length - 1) return this.removeTail();
		let curr = this.head;
		while (index-- > 1) (curr = curr.next);
		curr.next = curr.next.next;
		this.length--;
		return true;
	}

	/**
	 * @return {number[]}
	 */
	getValues() {
		let curr = this.head,
			values = [];
		while (curr) values.push(curr.val), (curr = curr.next);
		return values;
	}
}

// TESTS

const test = (result, expected) => {
	if (result.length !== expected.length) return false;
	for (let i = 0; i < result.length; i++)
		if (result[i] !== expected[i]) return false;
	return true;
};

// ["insertTail", 1, "insertTail", 2, "get", 1, "remove", 1, "insertTail", 2, "get", 1, "get", 0]
// const list = new LinkedList();
// list.insertTail(1);
// list.insertTail(2);
// console.log(test(list.getValues(), [1, 2])); // true
// console.log(list.get(1)); // 2
// console.log(list.remove(1)); // true
// list.insertTail(2);
// console.log(list.get(1)); // 2
// console.log(list.get(0)); // 1
// console.log(test(list.getValues(), [1, 2])); // true

// ["insertHead", 1, "insertHead", 2, "insertTail", 3, "insertTail", 4, "insertHead", 5, "get", 0, "get", 2, "get", 4, "remove", 2, "remove", 0, "insertHead", 6, "insertTail", 7, "getValues", "get", 5]

const list = new LinkedList();
list.insertHead(1);
list.insertHead(2);
list.insertTail(3);
list.insertTail(4);
list.insertHead(5);
console.log(list.get(0)); // 5
console.log(list.get(2)); // 3
console.log(list.get(4)); // 4
console.log(list.remove(2)); // true
console.log(list.remove(0)); // true
list.insertHead(6);
list.insertTail(7);
console.log(list.getValues()); // [6, 1, 3, 4, 7]
console.log(list.get(5)); // 7
