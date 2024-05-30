import { Queue } from '../queues/queue';
import { TreeNode } from '../utils/nodes';

// function isSymmetric(root: TreeNode | null): boolean {
//   if (!root.left || !root.right) return root.left == root.right;
//   const q = new Queue<TreeNode>(root);
//   while (!q.isEmpty()) {
//     let arr = [];
//     while (!q.isEmpty()) arr.push(q.dequeue());
//     let [l, r] = [0, arr.length - 1];
//     while (l < r) {

//     }
//   }
// }

// function isSymmetric(root: TreeNode | null): boolean {
//   if (!root.left || !root.right) return root.left === root.right;
//   function dfs(l: TreeNode | null, r: TreeNode | null): boolean {
//     if (!l || !r) return l === r;
//     return l.val == r.val && dfs(l.left, r.right) && dfs(l.right, r.left);
//   }
//   return dfs(root.left, root.right);
// }

// function isSymmetric(root: TreeNode | null): boolean {
//   if (!root.left || !root.right) return root.left == root.right;
//   let [stack1, stack2] = [[root.left], [root.right]];
//   while (stack1.length || stack2.length) {
//     const [n1, n2] = [stack1.pop(), stack2.pop()];
//     if (!n1 || !n2) {
//       if (n1 == n2) continue;
//       return false;
//     }
//     if (n1.val !== n2.val) return false;

//     stack1.push(n1.left), stack1.push(n1.right);
//     stack2.push(n2.right), stack2.push(n2.left);
//   }
//   return true;
// }

function isSymmetric(root: TreeNode | null): boolean {
  if (!root.left || !root.right) return root.left == root.right;
  function dfs(l: TreeNode | null, r: TreeNode | null): boolean {
    if (!l || !r) return l == r;
    return l.val == r.val && dfs(l.left, r.right) && dfs(l.right, r.left);
  }
  return dfs(root.left, root.right);
}

const h1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

const h2 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
);

const h3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSymmetric(h1));
console.log(isSymmetric(h2));
console.log(isSymmetric(h3));
