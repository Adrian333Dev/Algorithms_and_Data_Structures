class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const canReachLeaf = (root) => {
	if (root == null || root.val == 0) return false;
	if (root.left == null && root.right == null) return true;
	if (canReachLeaf(root.left)) return true;
	if (canReachLeaf(root.right)) return true;
	return false;
};

const leafPath = (root, path = []) => { 
  if (!root || root.val == 0) return false;
  path.push(root.val);

  if (root.left == null && root.right == null) return true;
  if (leafPath(root.left, path)) return true;
  if (leafPath(root.right, path)) return true;
  path.pop();
  return false;
};