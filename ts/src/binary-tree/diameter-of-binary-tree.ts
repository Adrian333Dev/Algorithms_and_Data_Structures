import { TreeNode } from '../utils/nodes';

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;
  function dfs(root: TreeNode | null): number {
    if (!root) return 0;
    const l = dfs(root.left),
      r = dfs(root.right);
    max = Math.max(max, l + r);
    return Math.max(l, r) + 1;
  }
  dfs(root);
  return max;
}

// function isValidBST(root: TreeNode | null): boolean {
//   if (!root) return true;
//   if (root.left && root.left.val > root.val) return false;
//   if (root.right && root.right.val < root.val) return false;
//   const l = isValidBST(root.left), r = isValidBST(root.right);
//   return l && r;
// }

// function isValidBST(root: TreeNode | null, parent = root.val): boolean {
//   if (!root) return false;
//   if (root.left && (root.left.val >= root.val || root.left.val >= parent)) return false;
//   if (root.right && (root.right.val <= root.val || root.right.val <= parent)) return false;
//   return isValidBST(root.left, root.val) && isValidBST(root.right, root.val);
// }

function isValidBST(
  root: TreeNode | null,
  min: number | null = null,
  max: number | null = null
): boolean {
  if (!root) return true;
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max))
    return false;
  return ( isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max));
}

const a = new TreeNode(7);
const c = new TreeNode(3);
const d = new TreeNode(6, c, a);
const b = new TreeNode(4);
const e = new TreeNode(5, b, d);

console.log(isValidBST(e));

const f = new TreeNode(1);
const g = new TreeNode(3);
const h = new TreeNode(2, f, g);

// console.log(isValidBST(h));
