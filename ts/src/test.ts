import { TreeNode } from './utils/nodes';

function treeSumRecursive(root: TreeNode | null): number {
  return root
    ? root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right)
    : 0;
}

function treeSumDFSIterative(root: TreeNode | null): number {
  if (!root) return 0;
  let stack = [root],
    sum = 0,
    node!: TreeNode | null;
  while (stack.length) {
    (node = stack.pop()), (sum += node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return sum;
}

function treeSumBFSIterative(root: TreeNode | null): number {
  if (!root) return 0;
  let queue = [root],
    sum = 0,
    node!: TreeNode | null;
  while (queue.length) {
    (node = queue.shift()), (sum += node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return sum;
}

function minValue(root: TreeNode): number {
  return Math.min(
    root.val,
    root.left ? minValue(root.left) : -Infinity,
    root.right ? minValue(root.right) : -Infinity
  );
}

function maxPathSum(root: TreeNode | null): number {
  return root
    ? Math.max(
        maxPathSum(root.left) + root.val,
        maxPathSum(root.right) + root.val
      )
    : 0;
}

// function insertIntoBST(
//   root: TreeNode | null,
//   val: number,
//   parent?: TreeNode,
//   dir?: -1 | 1
// ): TreeNode | null {
//   if (!root)
//     if (parent) {
//       dir === -1
//         ? (parent.left = new TreeNode(val))
//         : (parent.right = new TreeNode(val));
//       return parent;
//     } else return new TreeNode(val);
//   else
//     val < root.val
//       ? insertIntoBST(root.left, val, root, -1)
//       : insertIntoBST(root.right, val, root, 1);
//   return parent;
// }

function insertIntoBST(
  root: TreeNode | null,
  val: number,
  parent?: TreeNode,
  dir?: -1 | 1
): TreeNode | null {
  if (!root) {
    if (parent)
      dir === -1
        ? (parent.left = new TreeNode(val))
        : (parent.right = new TreeNode(val));
  } else
    val < root.val
      ? insertIntoBST(root.left, val, root, -1)
      : insertIntoBST(root.right, val, root, 1);
  return parent ? parent : new TreeNode(val);
}

function findMaxK(nums: number[]): number {
  if (!nums.length) return -1;
  const set = new Set<number>(nums);
  let max = -1;
  for (let n of nums) if (n > 0 && set.has(-n)) max = Math.max(max, n);
  return max;
}
