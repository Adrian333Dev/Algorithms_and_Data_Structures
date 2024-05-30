function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  function reverse(s = 0, e = nums.length - 1): void {
    while (s < e) ([nums[s], nums[e]] = [nums[e], nums[s]]), s++, e--;
  }
  reverse();
  reverse(0, k - 1);
  reverse(k);
}
