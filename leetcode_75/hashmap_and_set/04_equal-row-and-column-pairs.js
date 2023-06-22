/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = (grid) => {
	let n = grid.length, count = 0, rows = new Map();
	for (let i = 0; i < n; i++) {
    let key = grid[i].join('.');
    rows.set(key, (rows.get(key) || 0) + 1);
  }
  for (let i = 0; i < n; i++) {
    let key = '';
    for (let j = 0; j < n; j++) key += `${grid[j][i]}${j === n - 1 ? '' : '.'}`
    if (rows.has(key)) count += rows.get(key);
  }
	return count;
};

console.log(equalPairs([[3, 2, 1],[1, 7, 6],[2, 7, 7]])); // 1
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])); // 3
