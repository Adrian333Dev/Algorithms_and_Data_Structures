class N {
	constructor(val = 0, left = null, right = null) {
		(this.val = val), (this.left = left), (this.right = right);
	}
}

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

const root1 = new N(3, new N(9), new N(20, new N(15), new N(7)));
const root2 = new N(1, null, new N(2));
const root3 = null;
const root4 = new N(0);

console.log(maxDepth(root1)); // 3
console.log(maxDepth(root2)); // 2
console.log(maxDepth(root3)); // 0
console.log(maxDepth(root4)); // 1

