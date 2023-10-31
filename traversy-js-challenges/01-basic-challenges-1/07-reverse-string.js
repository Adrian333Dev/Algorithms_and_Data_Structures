/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
export const reverseString = (str) => {
	let result = '';
	for (let i = str.length; i >= 0; i--) result += str.charAt(i);
	return result;
};

// TESTS

const testCases = [
	['hello', 'olleh'],
	['Howdy', 'ydwoH'],
	['Greetings from Earth', 'htraE morf sgniteerG'],
];

for (const testCase of testCases) {
	const [str, expected] = testCase;
	const result = reverseString(str);
	if (result !== expected)
		throw new Error(
			`reverseString(${str}) expected ${expected}, got ${result}`
		);
}
