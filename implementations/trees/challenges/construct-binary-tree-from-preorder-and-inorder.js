class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => { // ! Try it from scratch again
	if (!preorder.length || !inorder.length) return null;

	let root =  new TreeNode(preorder[0]);
	let mid = inorder.indexOf(preorder[0]);
	root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
	root.right = buildTree(
		preorder.slice(mid + 1, preorder.length),
		inorder.slice(mid + 1, inorder.length)
  );
  
  return root;
};

// tests
let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder)); // [3,9,20,null,null,15,7]