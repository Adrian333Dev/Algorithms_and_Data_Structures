import { TreeNode } from '../utils/nodes';

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxD = 0;

  const findD = (root: TreeNode | null) => {
    if (!root) return 0;
    const leftD = findD(root.left), rightD = findD(root.right);
    maxD = Math.max(maxD, leftD + rightD);
    return Math.max(leftD, rightD) + 1;
  };

  findD(root);

  return maxD;
}
