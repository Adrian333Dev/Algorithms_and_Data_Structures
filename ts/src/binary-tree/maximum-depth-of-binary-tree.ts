import { Queue } from '../queues/queue';
import { TreeNode } from '../utils/nodes';

// function maxDepth(root: TreeNode | null, depth = 0): number {
//   if (!root) return depth;
//   depth++;
//   const leftDepth = maxDepth(root.left, depth);
//   const rightDepth = maxDepth(root.right, depth);
//   return Math.max(depth, leftDepth, rightDepth);
// }


function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let q = new Queue<TreeNode>(root),
    depth = 0;
  while (!q.isEmpty()) {
    const len = q.getSize();
    for (let i = 0; i < len; i++) {
      const node = q.dequeue();
      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
    }
    depth++;
  }
  return depth;
}

const h1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

const h2 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4, new TreeNode(8), new TreeNode(9)),
    new TreeNode(5, new TreeNode(10), new TreeNode(11))
  ),
  new TreeNode(
    3,
    new TreeNode(6, new TreeNode(12), new TreeNode(13)),
    new TreeNode(7, new TreeNode(14), new TreeNode(15))
  )
);

console.log(maxDepth(h1));
console.log(maxDepth(h2));
