/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
	// TODO: Try it again after some time
	const result = [];
	const backtrack = (current, index, sum) => {
		if (sum === target) result.push(current);
		else if (sum < target) {
			for (let i = index; i < candidates.length; i++)
				backtrack([...current, candidates[i]], i, sum + candidates[i]);
		}
	};
	backtrack([], 0, 0);
	return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
