const countHousePlacements = (n: number): number => {
  const MOD = 1e9 + 7;
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(2).fill(0));
  dp[1][0] = 1;
  dp[1][1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
    dp[i][1] = dp[i - 1][0];
  }

  return ((dp[n][0] + dp[n][1]) * (dp[n][0] + dp[n][1])) % MOD;
};

console.log(countHousePlacements(3)); // 25
