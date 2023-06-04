class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum, sum = 0) => {
  if (!root) return false;
  sum += root.val;
  if (sum === targetSum && !root.left && !root.right) return true;  
  if (hasPathSum(root.left, targetSum, sum)) return true;
  if (hasPathSum(root.right, targetSum, sum)) return true;
  return false;
};

const tree = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));

console.log(hasPathSum(tree, 22)); // true
console.log(hasPathSum(tree, 26)); // true
console.log(hasPathSum(tree, 18)); // true
console.log(hasPathSum(tree, 17)); // false

// [1,2]
const tree2 = new TreeNode(1, new TreeNode(2));
console.log(hasPathSum(tree2, 1)); // false