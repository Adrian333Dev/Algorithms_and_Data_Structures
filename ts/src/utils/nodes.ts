export class DLLNode<T = any> {
  constructor(
    public value: T,
    public prev: DLLNode | null = null,
    public next: DLLNode | null = null
  ) {}
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
