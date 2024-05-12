class MinStack {
  private stack = [];
  private minStack = [];
  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    if (!this.minStack.length) this.minStack.push(val);
    else
      this.minStack.push(
        Math.min(val, this.minStack[this.minStack.length - 1])
      );
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack.length ? this.stack[this.stack.length - 1] : undefined;
  }

  getMin(): number {
    return this.minStack.length
      ? this.minStack[this.minStack.length - 1]
      : undefined;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
