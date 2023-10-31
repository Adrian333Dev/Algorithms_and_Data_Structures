/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
export const findMaxNumber = (arr) =>
	arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);

// TESTS

const testCases = [
	[[1, 2, 3], 3],
	[[1, 2, 3, 10], 10],
	[[1, 2, 3, 10, 5], 10],
	[[1, 2, 3, 10, 5, 100], 100],
	[[1, 2, 3, 10, 5, 100, 99], 100],
];

for (const testCase of testCases) {
	const [arr, expected] = testCase;
	const result = findMaxNumber(arr);
	if (result !== expected)
		throw new Error(
			`findMaxNumber(${JSON.stringify(
				arr
			)}) expected ${expected}, got ${result}`
		);
}
