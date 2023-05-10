/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = (matrix) => {
	let colLen = matrix[0].length;
	let len = matrix.length * colLen;

	let results = [];

	// 1. [0][0] - [0][3] -> [1,2,3,4]
	// 2. [1][3] - [2][3] -> [8,12]
	// 3. [2][2] - [2][0] -> [11,10,9]
	// 4. [1][0] - [1][1] -> [5,6]

	let tl = 0;
	let tr = colLen;
	let br = matrix.length;
	let bl = 0;

	while (results.length < len) {}
};

let matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
];

console.log(spiralOrder(matrix));
