/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let l = 0,
    r = height.length - 1;
  let sum = 0,
    max = 0;

  while (l < r) {
    sum = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(sum, max);
    if (height[l] < height[r]) l++;
    else r--;
  }

  return max;
};

// TEST
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2
