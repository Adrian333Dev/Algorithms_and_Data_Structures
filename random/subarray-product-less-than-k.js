/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 1;
    for (let j = i; j < nums.length; j++) {
      sum *= nums[j];
      if (sum >= k) break;
      res++;
    }
  }
  return res;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
