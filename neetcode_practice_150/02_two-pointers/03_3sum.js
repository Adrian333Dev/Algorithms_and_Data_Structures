/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
	const repo = new Map();
	const results = [];
	const added = new Set();
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			const key = nums[i] + nums[j];
			if (!repo.has(key)) repo.set(key, []);
			repo.get(key).push([i, j]);
		}
	}
	for (let i = 0; i < nums.length; i++) {
		const remain = -nums[i];
		if (repo.has(remain))
			repo.get(remain).forEach((pair) => {
				if (!pair.includes(i)) {
          const vals = [nums[pair[0]], nums[pair[1]], nums[i]].sort();
          const key = vals.join('-');
					if (!added.has(key)) {
						added.add(key);
						results.push(vals);
					}
				}
			});
  }
  return results;
};

threeSum([-1, 0, 1, 2, -1, -4]);
