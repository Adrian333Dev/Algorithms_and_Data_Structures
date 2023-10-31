/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const countVowels = (str) =>
	str
		.split('')
		.reduce((count, char) => (vowels.has(char) ? ++count : count), 0);

// TESTS

const testCases = [
	['hello', 2],
	['why', 0],
	['awesome', 4],
	['Colt', 1],
	['Aaron', 2],
];

for (const testCase of testCases) {
	const [str, expected] = testCase;
	const result = countVowels(str);
	if (result !== expected)
		throw new Error(`countVowels(${str}) expected ${expected}, got ${result}`);
}
