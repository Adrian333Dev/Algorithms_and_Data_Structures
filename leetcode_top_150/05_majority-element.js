/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = (nums) => {
	let map = {};
	for (let n of nums) {
		if (map[n]) map[n]++;
		else map[n] = 1;
		if (map[n] > nums.length / 2) return n;
	}
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));