import { Queue } from '../queues/queue.js';

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let curr = this.root;
		while (true) {
			if (value === curr.value) return;
			if (value < curr.value) {
				if (curr.left === null) {
					curr.left = newNode;
					return this;
				}
				curr = curr.left;
			} else {
				if (curr.right === null) {
					curr.right = newNode;
					return this;
				}
				curr = curr.right;
			}
		}
	}

	find(value) {
		if (this.root === null) return;
		let curr = this.root;
		while (true) {
			if (value === curr.value) return curr;
			if (value < curr.value) {
				if (curr.left === null) return;
				curr = curr.left;
			} else {
				if (curr.right === null) return;
				curr = curr.right;
			}
		}
	}

	breadthFirstSearch() {
		const queue = new Queue();
		queue.enqueue(this.root);

		const visited = [];

		while (!queue.isEmpty()) {
			const currNode = queue.dequeue();
			visited.push(currNode.value);
			if (currNode.left) queue.enqueue(currNode.left);
			if (currNode.right) queue.enqueue(currNode.right);
		}

		return visited;
	}
}

// test breadthFirstSearch()

const bst = new BinarySearchTree();
const values = [10, 6, 15, 3, 8, 20];
values.forEach((value) => bst.insert(value));

console.log(bst.breadthFirstSearch()); // [ 10, 6, 15, 3, 8, 20 ]
