class MinStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
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
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.print(); // stack: -2, 0, -3; minStack: -2, -3
// console.log(minStack.getMin()); // -3
// console.log(minStack.pop()); // -3
// console.log(minStack.top()); // 0
// console.log(minStack.getMin()); // -2
// minStack.print(); // stack: -2, 0; minStack: -2

// ["MinStack","push","push","push","getMin","pop","getMin"]
// [[],[0],[1],[0],[],[],[]]

minStack.push(0);
minStack.push(1);
minStack.push(0);
minStack.print(); // stack: 0, 1, 0; minStack: 0, 0
console.log(minStack.getMin()); // 0
console.log(minStack.pop()); // 0
console.log(minStack.getMin()); // 0
minStack.print(); // stack: 0, 1; minStack: 0
