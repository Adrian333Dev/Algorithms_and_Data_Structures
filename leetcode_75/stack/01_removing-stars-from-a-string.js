/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		const c = s[i];
		if (c === '*') stack.pop();
		else stack.push(c);
	}
	return stack.join('');
};
