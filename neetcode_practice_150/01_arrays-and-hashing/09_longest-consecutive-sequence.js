/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
	const bucket = new Set(nums);
	let max = 0;
	for (let n of nums) {
		if (!bucket.has(n - 1)) {
			let curr = n,
				currLen = 1;
			while (bucket.has(++curr)) currLen++;
			max = Math.max(max, currLen);
		}
	}
	return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 2, 0, 1])); // 3
