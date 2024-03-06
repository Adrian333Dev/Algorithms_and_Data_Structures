/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        triplets.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
        l++, r--;
      } else if (sum < 0) l++;
      else r--;
    }
  }

  return triplets;
};

// TEST
console.log(threeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // []
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[0, 1, 2], [0, 3, 4]]
