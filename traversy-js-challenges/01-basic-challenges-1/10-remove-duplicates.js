/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
const removeDuplicates = (arr) => [...new Set(arr)];

// TESTS

const testCases = [
  [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
  [[1, 1, 2, 2, 3, 3], [1, 2, 3]],
  [[1, 2, 3, 1, 2], [1, 2, 3]],
  [['a', 'b', 'c', 'a', 'b'], ['a', 'b', 'c']],
];

for (const testCase of testCases) {
  const [arr, expected] = testCase;
  const result = removeDuplicates(arr);
  if (result.length !== expected.length) {
    console.error(`Length test failed: ${result} is not equal to ${expected}`);
    process.exit(1);
  }
  for (let i = 0; i < expected.length; i++) {
    if (result[i] !== expected[i]) {
      console.error(`Test failed: ${result} is not equal to ${expected}`);
      process.exit(1);
    }
  }
}

console.log('Tests passed');