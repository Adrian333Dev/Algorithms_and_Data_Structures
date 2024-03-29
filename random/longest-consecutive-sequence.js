/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const map = {};
  let max = 0;
  for (let num of nums) {
    if (num in map) continue;
    const left = map[num - 1] || 0;
    const right = map[num + 1] || 0;
    const sum = left + right + 1;
    map[num] = sum;
    map[num - left] = sum;
    map[num + right] = sum;
    max = Math.max(max, sum);
  }
  console.log(map);
  return max;
};

// TEST
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 2, 0, 1])); // 3
console.log(longestConsecutive([1, 2, 0, 1, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
