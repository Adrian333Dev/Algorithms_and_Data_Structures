const rob2 = (nums: number[]): number => {
  const n = nums.length;
  if (n === 1) return nums[0];
  // [1,2,3,1] dp: [0,0,0,0,0]
  const dp = new Array(n + 1).fill(0);
  let max = 0;
  for (let i = 2; i <= n; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  max = dp[n - 1];
  dp.fill(0);
  for (let i = 1; i <= n; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  return Math.max(max, dp[n]);
};
