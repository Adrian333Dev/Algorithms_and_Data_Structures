/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const minNode = (node) => {
	let curr = node;
	while (curr && curr.left) curr = curr.left;
	return curr;
};

const deleteNode = (root, key) => {
	if (root === null) return root;
	if (key > root.val) {
		root.right = deleteNode(root.right, key);
	} else if (key < root.val) {
		root.left = deleteNode(root.left, key);
	} else {
		if (root.left === null) return root.right;
		if (root.right === null) return root.left;
		else {
			const min = minNode(root.right);
			root.val = min.val;
			root.right = deleteNode(root.right, min.val);
		}
	}
	return root;
};

// [5,3,6,2,4,null,7], key = 3

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

console.log(deleteNode(root, 3));
