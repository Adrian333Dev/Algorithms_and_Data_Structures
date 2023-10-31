/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */

export const isPalindrome = (str) => {
	let l = 0,
		r = str.length - 1;
	while (l < r) {
		while (str.charAt(l) === ' ') l++;
    while (str.charAt(r) === ' ') l--;
    if (l >= r) return true;
		if (str.charAt(l++).toLowerCase() !== str.charAt(r--).toLowerCase())
			return false;
	}
	return true;
};

// TESTS

const testCases = [
	['racecar', true],
	['hello', false],
	['Bob', true],
	['Madam', true],
	['Abba', true],
	['Never odd or even', true],
	// ['See? I have a comma, too!', false],
];

for (const testCase of testCases) {
	const [str, expected] = testCase;
	const result = isPalindrome(str);
	if (result !== expected)
		throw new Error(`isPalindrome(${str}) expected ${expected}, got ${result}`);
}
