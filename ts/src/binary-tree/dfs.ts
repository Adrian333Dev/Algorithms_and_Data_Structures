import { TreeNode } from '../utils/nodes';

const dfs = (root: TreeNode) => {
  const stack = [root], result: number[] = [];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
};
