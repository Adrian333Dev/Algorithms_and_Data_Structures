const rob = (nums: number[]): number => {
  const n = nums.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);

  return dp[n];
};
