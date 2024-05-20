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
