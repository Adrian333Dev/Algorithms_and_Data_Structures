/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let l = 0,
    r = matrix.length - 1,
    m = matrix.length && matrix[0].length;
  while (l <= r) {
    let i = Math.floor((l + r) / 2),
      row = matrix[i];
    if (target < row[0]) r = i - 1;
    else if (target > row[m - 1]) l = i + 1;
    else {
      (l = 0), (r = m - 1);
      // console.log('row:', row);
      while (l <= r) {
        i = Math.floor((l + r) / 2);
        let v = row[i];
        // console.log('v:', v);
        if (target > v) l = i + 1;
        else if (target < v) r = i - 1;
        else return true;
      }
      return false;
    }
  }
  return false;
};

// TEST CASES
const tests = [
  {
    matrix: [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    target: 3,
    expected: true,
  },
  {
    matrix: [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    target: 13,
    expected: false,
  },
  {
    matrix: [],
    target: 0,
    expected: false,
  },
  {
    matrix: [[]],
    target: 0,
    expected: false,
  },
  {
    matrix: [[1]],
    target: 1,
    expected: true,
  },
  {
    matrix: [[1]],
    target: 0,
    expected: false,
  },
];

// const res = searchMatrix(tests[1].matrix, tests[1].target);
// if (res === tests[1].expected) {
//   console.info('PASSED');
// } else console.error(`FAILED: Expected ${tests[1].expected}, got ${res}`);

for (const test of tests) {
  const res = searchMatrix(test.matrix, test.target);
  if (res === test.expected) {
    console.info('PASSED');
  } else console.error(`FAILED: Expected ${test.expected}, got ${res}`);
}
