/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
};

// TESTS

const tests = [
  [2, 2],
  [3, 3],
  [4, 5],
  [5, 8],
  [6, 13],
  [7, 21],
  [8, 34],
  [9, 55],
  [10, 89],
];

tests.forEach((t) => {
  const actual = climbStairs(t[0]);
  if (actual === t[1]) console.log('PASS');
  else console.error(`FAIL! Expected: ${t[1]}, but got: ${actual}`);
});
