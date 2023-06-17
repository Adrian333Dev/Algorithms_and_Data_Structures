/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
	// TODO: Try it again after some time
	const result = [];
	const backtrack = (arr, index) => {
		result.push(arr);
		for (let i = index; i < nums.length; i++)
			backtrack([...arr, nums[i]], i + 1);
	};
	backtrack([], 0);
	return result;
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
