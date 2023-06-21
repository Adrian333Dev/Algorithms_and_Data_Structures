/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
  // [1,1,1,0,0,0,1,1,1,1,0], k = 2
  let l = 0, r = 0, max = 0, zeros = 0, len = nums.length;
  while (zeros <= k && r < len) if (nums[r++] === 0) zeros++;
  if (zeros <= k) return len;
  max = r - l - 1;
  while (r < nums.length) { 
    while (zeros <= k && r < len) if (nums[r++] === 0) zeros++;
    if (zeros <= k) return Math.max(max, r - l);
    max = Math.max(max, r - l - 1);
  }
  return max;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // 6