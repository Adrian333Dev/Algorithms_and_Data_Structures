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
}

// test

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);

console.log(tree.find(2).value);
console.log(tree.find(10).value);
console.log(tree.find(333));
