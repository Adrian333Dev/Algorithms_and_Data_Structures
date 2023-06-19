/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
  // ! The Solution is not mine, TODO: try to solve it again after a while
  let l = Infinity, m = Infinity, len = nums.length;
  if (len < 3) return false;
  for (let i = 0; i < len; i++) {
    const n = nums[i];
    if (n > m) return true;
    else if (n > l && n < m) m = n;
    else if (n < l) l = n;
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true