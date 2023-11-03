/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (str) => {
	const pairs = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	const stack = [];
	for (let c of str) {
		if (c in pairs) stack.push(c);
		else if (pairs[stack[stack.length - 1]] === c) stack.pop();
		else return false;
	}

	return stack.length === 0;
};

// test
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('[')); // false
