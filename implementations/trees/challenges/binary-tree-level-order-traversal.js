import { Queue } from '../../queues/queue.js';

class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => { // ! Try it from scratch again
	if (!root) return [];
	const data = [];
	const queue = new Queue();
	let node = root;
	queue.enqueue(node);
  while (queue.length) {
    let level = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) { 
      node = queue.dequeue();
      level.push(node.val);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    data.push(level);
	}
	return data;
};

// TEST CASES

const tree1 = new TreeNode(
	3,
	new TreeNode(9),
	new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(levelOrder(tree1)); // [[3],[9,20],[15,7]]

const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, null, new TreeNode(5))
);
console.log(levelOrder(tree2)); // [[1],[2,3],[4,5]]