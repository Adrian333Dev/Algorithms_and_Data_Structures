/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = (root) => {
	const repo = new Map();
	const calcLevelSum = (root, level = 1) => {
		if (!root) return null;
		repo.set(level, (repo.get(level) || 0) + root.val);
		calcLevelSum(root.left, level + 1);
		calcLevelSum(root.right, level + 1);
	};
	calcLevelSum(root);
	let maxLevel = 0,
		maxSum = 0;
	if (root) {
		maxLevel = 1;
		maxSum = root.val;
	}
	for (let [level, sum] of repo)
		if (sum > maxSum) {
			maxSum = sum;
			maxLevel = level;
		}
	return maxLevel;
};

const root = new TreeNode(
	1,
	new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
	new TreeNode(0)
);

// console.log(maxLevelSum(root));

// [-100,-200,-300,-20,-5,-10,null] => 3

const root2 = new TreeNode(
	-100,
	new TreeNode(-200, new TreeNode(-20), new TreeNode(-5)),
	new TreeNode(-300, new TreeNode(-10))
);

console.log(maxLevelSum(root2));
