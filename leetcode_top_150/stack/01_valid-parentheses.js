/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	const pairs = { ')': '(', '}': '{', ']': '[' };
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (pairs[s[i]]) {
			if (stack[stack.length - 1] === pairs[s[i]]) stack.pop();
			else return false;
		} else stack.push(s[i]);
	}

	return !stack.length;
};

// test
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
