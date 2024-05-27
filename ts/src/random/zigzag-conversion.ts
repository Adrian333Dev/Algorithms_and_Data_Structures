function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s;

  // Create an array of empty strings for each row
  let rows = new Array(numRows).fill('').map(() => '');

  let curRow = 0;
  let goingDown = false;

  // Iterate over each character in the string
  for (let char of s) {
    rows[curRow] += char;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown; // Reverse direction
    curRow += goingDown ? 1 : -1;
  }

  // Join all rows to get the final string
  console.log(rows);
  return rows.join('');
}

console.log(convert('PAYPALISHIRING', 3));
