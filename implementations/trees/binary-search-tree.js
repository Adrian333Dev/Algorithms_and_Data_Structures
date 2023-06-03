import { Queue } from '../queues/queue.js';

class Node {
	constructor(value = null) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	search(value) {
		let curr = this.root;
		while (curr) {
			if (value < curr.value) curr = curr.left;
			else if (value > curr.value) curr = curr.right;
			else return curr;
		}
		return null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let curr = this.root;
		while (true) {
			if (value < curr.value) {
				if (!curr.left) {
					curr.left = newNode;
					return this;
				}
				curr = curr.left;
			} else if (value > curr.value) {
				if (!curr.right) {
					curr.right = newNode;
					return this;
				}
				curr = curr.right;
			} else return this;
		}
	}
}

// test remove

const bst = new BinarySearchTree();
const values = [10, 6, 15, 3, 8, 20, 2, 4, 7, 9, 18, 21];
values.forEach((value) => bst.insert(value));
console.log(bst.dfsInOrder());
bst.remove(10);
bst.remove(15);
console.log(bst.dfsInOrder());
