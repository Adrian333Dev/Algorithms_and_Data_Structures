/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  const dp = new Array(n + 1).fill(0);
  dp[1] = nums[0];
  for (let i = 2; i <= n; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);

  return dp[n];
};
// https://leetcode.com/problems/house-robber/solutions/156523/from-good-to-great-how-to-approach-most-of-dp-problems

// TESTS
const tests = [
  [[1, 2, 3, 1], 4], // Test 1
  [[2, 7, 9, 3, 1], 12], // Test 2
  [[2, 1, 1, 2], 4], // Test 3
  [[1, 2, 3, 1, 1, 100], 103], // Test 4
];

tests.forEach(([nums, expected], i) => {
  const actual = rob(nums);
  if (actual === expected) console.log(`Test case ${i + 1} PASS`);
  else
    console.error(
      `Test case ${i + 1} FAIL. Expected: ${expected} but got ${actual}`
    );
});
