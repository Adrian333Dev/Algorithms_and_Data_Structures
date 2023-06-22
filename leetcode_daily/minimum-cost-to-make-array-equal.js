/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */

const minCost = (nums, cost) => {
	let min = Infinity, len = nums.length;
	for (let i = 0; i < len; i++) {
		let sum = 0, base = nums[i];
		for (let j = 0; j < len; j++) if (i !== j) sum += Math.abs(base - nums[j]) * cost[j];
		min = Math.min(min, sum);
	}
	return min;
};

let nums = [1, 3, 5, 2],
	cost = [2, 3, 1, 14];
console.log(minCost(nums, cost)); // 8

(nums = [
	735103, 366367, 132236, 133334, 808160, 113001, 49051, 735598, 686615, 665317,
	999793, 426087, 587000, 649989, 509946, 743518,
]),
	(cost = [
		724182, 447415, 723725, 902336, 600863, 287644, 13836, 665183, 448859,
		917248, 397790, 898215, 790754, 320604, 468575, 825614,
	]);
console.log(minCost(nums, cost)); // 1907611126748


	// let repo = {},
	// 	res = 0;
	// for (let i = 0; i < nums.length; i++)
	// 	repo[nums[i]] = (repo[nums[i]] || 0) + cost[i];
	// let mostExpensive = 0,
	// 	highestCost = 0;
	// for (const [n, c] of Object.entries(repo)) {
	// 	if (c > highestCost) {
	// 		highestCost = c;
	// 		mostExpensive = n;
	// 	}
	// }
	// for (const [n, c] of Object.entries(repo)) {
	// 	if (n === mostExpensive) continue;
	// 	res += Math.abs(n - mostExpensive) * c;
	// }

	// let nums2 = [],
	// 	cost2 = [];
	// let combined = cost.map((c, i) => [nums[i], c]).sort((a, b) => a[1] - b[1]);
	// combined.forEach(([n, c]) => {
	// 	nums2.push(n), cost2.push(c);
	// });
