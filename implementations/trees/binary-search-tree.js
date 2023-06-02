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

	removeNode(root, value) {
		if (!root) return root;
		if (value > root.value) {
			root.right = this.remove(root.right, value);
		} else if (value < root.value) {
			root.left = this.remove(root.left, value);
		} else {
			if (root.left) return root.right;
			else if (root.right) return root.left;
			else {
				const minNode = this.findMinNode(root.right);
				root.value = minNode.value;
				root.right = this.remove(root.right, minNode.value);
			}
		}
		return root;
	}

	remove(value) { 
		this.root = this.removeNode(this.root, value);
		return this;
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

	findMinNode(node) {
		let curr = node;
		while (curr && curr.left) curr = curr.left;
		return curr;
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

	dfsPreOrder() {
		const visited = [];
		const curr = this.root;

		const traverse = (node) => {
			visited.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(curr);
		return visited;
	}

	dfsPostOrder() {
		const visited = [];
		const curr = this.root;
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.value);
		};
		traverse(curr);
		return visited;
	}

	dfsInOrder() {
		const visited = [];
		const curr = this.root;
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			visited.push(node.value);
			if (node.right) traverse(node.right);
		};
		traverse(curr);
		return visited;
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
