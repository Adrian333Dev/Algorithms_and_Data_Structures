class Solution {
	/*
	 * @param strs: a list of strings
	 * @return: encodes a list of strings to a single string.
	 */
	encode(strs) {
		let result = '';
		for (let str of strs) result += `<${str.length}>${str}`;
		return result;
	}

	/*
	 * @param str: A string
	 * @return: dcodes a single string to a list of strings
	 */
	decode(str) {
		let result = [];
		let i = 0;
		while (i < str.length) {
			let j = str.indexOf('>', i);
			let len = parseInt(str.slice(i + 1, j));
      if (len > 0) result.push(str.slice(j + 1, j + len + 1));
      i = j + len + 1;
    }
    return result;
	}
}

const solution = new Solution();
console.log(solution.encode(['lint', 'code', 'love', 'you'])); // <4>lint<4>code<4>love<3>you
console.log(solution.decode('<4>lint<4>code<4>love<3>you')); // ['lint', 'code', 'love', 'you']
console.log(solution.encode([''])); // <0>
console.log(solution.decode('<0>')); // ['']