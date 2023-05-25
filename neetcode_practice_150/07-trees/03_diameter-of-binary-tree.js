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
 * @return {number}
 */

class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

// const diameterOfBinaryTree = (root, depth = 0, repo = new Set()) => {
// 	if (!root) return depth;
// 	root.left && repo.add(diameterOfBinaryTree(root.left, depth - 1, repo));
// 	root.right && repo.add(diameterOfBinaryTree(root.right, depth + 1, repo));
// };

// Test 1: root = [1,2,3,4,5,6]

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.right.right = new TreeNode(6);
root.left.left.left = new TreeNode(5);

const repo = new Set();

const diameterOfBinaryTree = (root, depth = 0, repo = new Set()) => {
	if (!root) return depth;
	root.left && repo.add(diameterOfBinaryTree(root.left, depth - 1, repo));
	root.right && repo.add(diameterOfBinaryTree(root.right, depth + 1, repo));
};

diameterOfBinaryTree(root, 0, repo);
console.log(repo);