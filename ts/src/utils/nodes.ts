export class DLLNode<T = any> {
  constructor(
    public value: T,
    public prev: DLLNode | null = null,
    public next: DLLNode | null = null
  ) {}
}
