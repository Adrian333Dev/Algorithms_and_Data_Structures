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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  if (root.val === val) return root;
	let curr = root;
	while (true) {
		if (curr.val === val) return curr;
		if (curr.val > val) {
			if (curr.left === null) return null;
			curr = curr.left;
		} else if (curr.val < val) {
			if (curr.right === null) return null;
			curr = curr.right;
		}
  }
};

class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const root = new TreeNode(
	4,
	new TreeNode(2, new TreeNode(1), new TreeNode(3)),
	new TreeNode(7)
);

console.log(searchBST(root, 2)); // [2,1,3]
