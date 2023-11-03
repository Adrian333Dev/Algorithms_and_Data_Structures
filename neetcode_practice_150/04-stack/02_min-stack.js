class MinStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	push(val) {
		if (!this.stack.length) this.stack.push(val), this.minStack.push(val);
		else {
			this.stack.push(val);
			if (this.getMin() > val) this.minStack.push(val);
			else this.minStack.push(this.getMin());
		}
	}

	/**
	 * @return {void}
	 */
	pop() {
		if (this.stack.length) this.stack.pop(), this.minStack.pop();
	}

	/**
	 * @return {number}
	 */
	top() {
		let len = this.stack.length;
		return len ? this.stack[len - 1] : null;
	}

	/**
	 * @return {number}
	 */
	getMin() {
		return this.minStack[this.minStack.length - 1];
	}

	print() {
		console.log('stack:', this.stack.join(', '));
		console.log('minStack:', this.minStack.join(', '));
	}
}

// test MinStack

// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.print();
console.log(minStack.getMin());
minStack.pop();
minStack.print();
console.log(minStack.top());
console.log(minStack.getMin());

