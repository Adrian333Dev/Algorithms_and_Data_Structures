/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
	let n = matrix.length;
	if (!n) return matrix;

	let mid = Math.floor(n / 2);

	for (let i = 0; i < mid; i++) {
		for (let j = i; j < n - 1 - i; j++) {
			// console.log(`i: ${i}, j: ${j}`);
			// console.log(
			// 	matrix[i][j], // top left
			// 	matrix[j][n - i - 1], // top right
			// 	matrix[n - i - 1][n - j - 1], // bottom right
			// 	matrix[n - j - 1][i] // bottom left
			// );
			let temp = matrix[i][j]; // top left
			matrix[i][j] = matrix[n - j - 1][i]; // top left = bottom left
			matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]; // bottom left = bottom right
			matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]; // bottom right = top right
			matrix[j][n - i - 1] = temp; // top right = top left
		}
	}

	console.log(matrix);
};

rotate([
	[1, 2, 3], // [ 7, 4, 1 ]
	[4, 5, 6], // [ 8, 5, 2 ]
	[7, 8, 9], // [ 9, 6, 3 ]
]);

/* loops
  [1, 2, 3] -> [ 7, 2, 1 ] -> [ 7, 4, 1 ]
  [4, 5, 6] -> [ 4, 5, 6 ] -> [ 8, 5, 2 ]
  [7, 8, 9] -> [ 9, 8, 3 ] -> [ 9, 6, 3 ]
*/

// Expected:
// [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

rotate([
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16],
]);

// Expected:
// [
//   [ 15, 13, 2, 5 ],
//   [ 14, 3, 4, 1 ],
//   [ 12, 6, 8, 9 ],
//   [ 16, 7, 10, 11 ]
// ]
