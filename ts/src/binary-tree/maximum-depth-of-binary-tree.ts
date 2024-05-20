import { TreeNode } from "../utils/nodes";

function maxDepth(root: TreeNode | null, depth = 0): number {
  if (!root) return depth;
  depth++;
  const leftDepth = maxDepth(root.left, depth);
  const rightDepth = maxDepth(root.right, depth);
  return Math.max(depth, leftDepth, rightDepth);
}
