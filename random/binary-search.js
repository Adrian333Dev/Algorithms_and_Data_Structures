/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let i = Math.floor((l + r) / 2),
      m = nums[i];
    if (m < target) l = i + 1;
    else if (m > target) r = i - 1;
    else return i;
  }
  return -1;
};

// TEST
console.log(search([1, 2, 3, 4, 5], 3), 2);
