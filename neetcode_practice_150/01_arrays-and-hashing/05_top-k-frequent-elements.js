/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
	const repo = {};
  for (let n of nums) repo[n] = (repo[n] || 0) + 1;
  return Object.keys(repo).sort((a, b) => repo[b] - repo[a]).slice(0, k);
};

console.log(topKFrequent([1,1,1,2,2,3], 2));