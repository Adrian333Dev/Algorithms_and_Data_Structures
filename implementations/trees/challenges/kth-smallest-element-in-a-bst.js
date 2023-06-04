/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
	const arr = [];
	(function inorderTraversal(root) {
		if (!root) return;
		inorderTraversal(root.left);
		arr.push(root.val);
		inorderTraversal(root.right);
	})(root);

	return arr[k - 1];
};

class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

// (root = [3, 1, 4, null, 2]), (k = 1);

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

console.log(kthSmallest(root, 1));
