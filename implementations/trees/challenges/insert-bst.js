/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const insertIntoBST = (root, val) => {
	if (root === null) return new TreeNode(val);
	if (val > root.val) root.right = insertIntoBST(root.right, val);
	else if (val < root.val) root.left = insertIntoBST(root.left, val);
	return root;
};

// root = [4,2,7,1,3], val = 5

const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
const val = 5;

console.log(insertIntoBST(root, val));