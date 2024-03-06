/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const rows = Array(9)
    .fill()
    .map(() => Array(9).fill(0));
  const cols = Array(9)
    .fill()
    .map(() => Array(9).fill(0));
  const boxes = Array(9)
    .fill()
    .map(() => Array(9).fill(0));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const rowCell = board[i][j];
      const colCell = board[j][i];
      const boxCell = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (rowCell !== '.') {
        if (rows[i][rowCell - 1]) return false;
        else rows[i][rowCell - 1]++;
      }
      if (colCell !== '.') {
        if (cols[i][colCell - 1]) return false;
        else cols[i][colCell - 1]++;
      }
      if (boxCell !== '.') {
        if (boxes[i][boxCell - 1]) return false;
        else boxes[i][boxCell - 1]++;
      }
    }
  }

  console.log('ROWS: ');
  for (const row of rows) console.log(row.join(' '));
  console.log('COLS: ');
  for (const col of cols) console.log(col.join(' '));
  console.log('BOXES: ');
  for (const box of boxes) console.log(box.join(' '));

  return true;
};

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
