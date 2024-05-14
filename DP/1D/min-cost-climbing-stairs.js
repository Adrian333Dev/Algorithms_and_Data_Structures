/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
  const n = cost.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++)
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);

  return dp[n];
};

// TESTS

const tests = [
  {
    input: [10, 15, 20],
    expected: 15,
  },
  {
    input: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
    expected: 6,
  },
];

tests.forEach((t, i) => {
  const actual = minCostClimbingStairs(t.input);
  if (actual === t.expected) console.log(`Test case ${i + 1} PASS`);
  else
    console.error(
      `Test case ${i + 1} FAIL. Expected: ${t.expected} but got ${actual}`
    );
});
