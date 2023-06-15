/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
	let square = {};
	for (let i = 0; i < 9; i++) {
		let row = new Set();
		for (let j = 0; j < 9; j++) {
			const rowNum = board[i][j];
			if (rowNum !== '.') {
				const cellKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
				if (row.has(rowNum) || square[cellKey]?.has(rowNum)) return false;
				else {
					row.add(rowNum);
					square[cellKey] = square[cellKey] || new Set();
					square[cellKey].add(rowNum);
				}
			}
		}
	}

	for (let i = 0; i < 9; i++) {
		let col = new Set();
		for (let j = 0; j < 9; j++) {
			const colNum = board[j][i];
			if (colNum !== '.' && col.has(colNum)) return false;
			else col.add(colNum);
		}
	}

	return true;
};

console.log(
	isValidSudoku([
		['5', '3', '.', '.', '7', '.', '.', '.', '.'],
		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
	])
); // true
