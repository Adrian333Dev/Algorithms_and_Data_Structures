/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (short, long) => {
	let max = '';
	if (short.length > long.length) [short, long] = [long, short];
	for (let i = 1; i <= short.length; i++) {
		if (short.length % i !== 0 || long.length % i !== 0) continue;
		let str = short.slice(0, i);
		let str1 = str.repeat(short.length / i),
      str2 = str.repeat(long.length / i);
		if (str2 === long && str1 === short) max = str;
	}
	return max;
};

// console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
