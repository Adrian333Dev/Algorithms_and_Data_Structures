class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = (root) => {
	if (!root) return [];
	let data = [];
	let queue = [root];
	let node = null;
	while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
    };
    data.push(node.val);
	}
	return data;
};

// TEST CASES

// const tree1 = new TreeNode(
// 	3,
// 	new TreeNode(9),
// 	new TreeNode(20, new TreeNode(15), new TreeNode(7))
// );
// console.log(rightSideView(tree1)); // [3,20,7]

// [1,2,3,4] => [1,3,4]
const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3)
);
console.log(rightSideView(tree2)); // [1,3,4]