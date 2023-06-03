/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
	const repo = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	let large = 0;
	let sum = 0;
	let i = s.length - 1;
	while (i >= 0) {
		const c = repo[s.charAt(i)];
		if (c >= large) {
			sum += c;
			large = c;
		} else sum -= c;
		i--;
	}

	return sum;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
