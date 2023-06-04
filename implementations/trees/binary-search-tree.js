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

	// Insertion and deletion

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

	remove(value) {
		const removeNode = (node, value) => {
			if (!node) return null;
			if (value === node.value) {
				if (!node.left && !node.right) return null;
				if (!node.left) return node.right;
				if (!node.right) return node.left;
				const min = this.getMin(node.right);
				node.value = min;
				node.right = removeNode(node.right, min);
				return node;
			} else if (value < node.value) {
				node.left = removeNode(node.left, value);
				return node;
			} else {
				node.right = removeNode(node.right, value);
				return node;
			}
		};
		this.root = removeNode(this.root, value);
	}

	// Traversal

	bfs() {
		const queue = new Queue();
		const data = [];
		let node = this.root;
		queue.enqueue(node);
		while (queue.size) {
			node = queue.dequeue();
			data.push(node.value);
			if (node.left) queue.enqueue(node.left);
			if (node.right) queue.enqueue(node.right);
		}
		return data;
	}

	dfsPreOrder() {
		const data = [];
		const traverse = (node) => {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return data;
	}

	dfsPostOrder() {
		const data = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		};
		traverse(this.root);
		return data;
	}

	dfsInOrder() {
		const data = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return data;
	}

	// Helper methods

	getMin(node = this.root) {
		if (!node) return null;
		while (node.left) node = node.left;
		return node.value;
	}

	printTree(node = this.root, prefix = '', isLeft = true) {
		if (node === null) {
			console.log('Empty tree');
			return;
		}
		if (node.right)
			this.printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
		console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.value);
		if (node.left)
			this.printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true);
	}
}

// testing

class BinarySearchTreeTest {
	constructor() {
		this.tree = new BinarySearchTree();
		[10, 6, 15, 3, 8, 20].forEach((value) => this.tree.insert(value));
		this.tree.printTree();
	}
}

new BinarySearchTreeTest();
