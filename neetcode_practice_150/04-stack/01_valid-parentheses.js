/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
	const pairs = { ')': '(', ']': '[', '}': '{' }, stack = [];
	for (let c of s)
		c in pairs
			? stack[stack.length - 1] === pairs[c]
				? stack.pop()
				: false
			: stack.push(c);
	return !stack.length;
};

// test
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
