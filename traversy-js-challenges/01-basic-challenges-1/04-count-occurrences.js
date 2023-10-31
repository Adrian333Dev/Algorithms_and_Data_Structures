/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
export const countOccurrences = (str, char) =>
	str
		.split('')
		.reduce((count, currChar) => (char === currChar ? ++count : count), 0);

// TESTS

const testCases = [
	['hello', 'l', 2],
	['simple test', 's', 2],
	['123456789', '9', 1],
	['123456789', '0', 0],
	['123456789', '1', 1],
];

for (const testCase of testCases) {
	const [str, char, expected] = testCase;
	const result = countOccurrences(str, char);
	if (result !== expected)
		throw new Error(
			`countOccurrences(${str}, ${char}) expected ${expected}, got ${result}`
		);
}
