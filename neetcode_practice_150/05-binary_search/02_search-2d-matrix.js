/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
	if (!matrix.length || !matrix[0]?.length) return -1;
	let y = matrix.length;
	let x = matrix[0].length;

	let mid = Math.floor(y / 2);
	let start = 0;
	let end = y - 1;
	let row = 0;
	while (start <= end) {
		if (target < matrix[mid][0]) {
			end = mid - 1;
		} else if (target > matrix[mid][x - 1]) {
			start = mid + 1;
		} else if (target >= matrix[mid][0] && target <= matrix[mid][x - 1]) {
			row = mid;
			break;
		} else return false;
		mid = Math.floor((start + end) / 2);
	}
	return binarySearch(matrix[row] || [], target) > -1;
};

const binarySearch = (nums, target) => {
	if (!nums.length) return -1;
	let mid = Math.floor(nums.length / 2);
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		if (nums[mid] < target) left = mid + 1;
		else if (nums[mid] > target) right = mid - 1;
		else if (nums[mid] === target) return mid;
		else return -1;
		mid = Math.floor((left + right) / 2);
	}
	return -1;
};

// test cases

const matrix = [
	[1, 3, 5, 7],
	[10, 11, 16, 20],
	[23, 30, 34, 60],
	[61, 62, 63, 64],
	[65, 66, 67, 68],
	[69, 70, 71, 72],
	[73, 74, 75, 76],
	[77, 78, 79, 80],
	[81, 82, 83, 84],
	[85, 86, 87, 88],
	[89, 90, 91, 92],
];

console.log(searchMatrix(matrix, 1)); // true
console.log(searchMatrix(matrix, 3)); // true
console.log(searchMatrix(matrix, 5)); // true
console.log(searchMatrix(matrix, 7)); // true
console.log(searchMatrix(matrix, 10)); // true

console.log(searchMatrix(matrix, 11)); // true
console.log(searchMatrix(matrix, 16)); // true
console.log(searchMatrix(matrix, 20)); // true
console.log(searchMatrix(matrix, 24)); // false
