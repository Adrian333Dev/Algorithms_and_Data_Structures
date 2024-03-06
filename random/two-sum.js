/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i], remain = target - num;
    if (remain in map) return [map[remain], i];
    else map[num] = i;
  }
  return [];
};

// TEST
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([3, 2, 3], 6)); // [0, 2]
console.log(twoSum([4, 4, 3, 1, 2], 8)); // [0, 4]
