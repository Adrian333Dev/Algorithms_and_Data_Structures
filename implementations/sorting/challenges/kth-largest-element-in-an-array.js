/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const kthIdx = nums.length - k;

  const quickSelect = (l = 0, r = nums.length - 1) => {
    const randomIdx = Math.floor(Math.random() * (r - l + 1)) + l;
    [nums[randomIdx], nums[r]] = [nums[r], nums[randomIdx]];

    let i = l,
      p = l,
      rightMostVal = nums[r];
    while (i < r) {
      if (nums[i] <= rightMostVal) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        p++;
      }
      i++;
    }
    [nums[p], nums[r]] = [nums[r], nums[p]];
    if (kthIdx === p) return nums[kthIdx];
    if (kthIdx > p) return quickSelect(p + 1, r);
    return quickSelect(l, p - 1);
  };

  return quickSelect();
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
console.log(findKthLargest([7, 6, 5, 4, 3, 2, 1], 2)); // 6
console.log(findKthLargest([1], 1)); // 1
