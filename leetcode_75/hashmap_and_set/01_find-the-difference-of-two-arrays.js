/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
  const set1 = new Set(nums1), set2 = new Set(nums2), res = [[], []];
  for (let n of set1.values()) if (!set2.has(n)) res[0].push(n);
  for (let n of set2.values()) if (!set1.has(n)) res[1].push(n);
  return res;
};

console.log(findDifference([1, 2, 3], [1, 2, 4])); // [[3], [4]]