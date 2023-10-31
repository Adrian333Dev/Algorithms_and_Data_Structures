/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
export const titleCase = (str) => {
	return str
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
};

// TESTS

const testCases = [
	['hello world', 'Hello World'],
	['javascript is cool', 'Javascript Is Cool'],
	['HELLO WORLD', 'Hello World'],
	['1st thing', '1st Thing'],
	['a lOT of wORdS', 'A Lot Of Words'],
];

for (const testCase of testCases) {
	const [str, expected] = testCase;
	const result = titleCase(str);
	if (result !== expected)
		throw new Error(`titleCase(${str}) expected ${expected}, got ${result}`);
}
