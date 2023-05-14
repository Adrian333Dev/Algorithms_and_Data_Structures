/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = (nums, val) => {
  let i = r = nums.length - 1;
  let count = 0;
  while (i >= 0) {
    if (nums[i] == val) {
      nums[i] = nums[r]
      nums[r] = val;
      count++;
      r--;
    } 
    i--;
  }
  console.log(nums.toString());
  return nums.length - count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));