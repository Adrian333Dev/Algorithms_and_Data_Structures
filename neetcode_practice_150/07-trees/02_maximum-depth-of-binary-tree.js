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
const maxDepth = (root, depth = 1) => {
  if (!root) return 0;
	const left = root.left ? maxDepth(root.left, depth + 1) : depth;
	const right = root.right ? maxDepth(root.right, depth + 1) : depth;
	return Math.max(left, right);
};
