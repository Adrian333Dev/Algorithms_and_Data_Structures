/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let l = 0, r = k, sum = 0, max = 0, len = nums.length;
  for (let i = 0; i < k; i++) sum += nums[i];
  max = sum / k;
  while (r < len) sum += nums[r++] - nums[l++], max = Math.max(max, sum / k);
  return max;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 2)); // 26.5
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 3)); // 15.66667