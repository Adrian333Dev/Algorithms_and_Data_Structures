/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const triplets = [],
    len = nums.length - 2;
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        triplets.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++, r--;
      }
    }
  }
  return triplets;
};

// TEST
const tests = [
  {
    nums: [-1, 0, 1, 2, -1, -4],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    nums: [],
    expected: [],
  },
  {
    nums: [0],
    expected: [],
  },
  {
    nums: [0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    nums: [0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    nums: [0, 0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    nums: [0, 0, 0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    nums: [0, 0, 0, 0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    nums: [0, 0, 0, 0, 0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    nums: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    nums: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
];

for (const t of tests) {
  const res = threeSum(t.nums),
    exp = t.expected;
  const passed =
    res.length === exp.length &&
    res.every((v, i) => v.every((e, j) => e === exp[i][j]));
  if (passed) console.log('PASSED');
  else {
    console.error('FAILED');
    console.log('Expected:', exp);
    console.log('Returned:', res);
    console.log('-'.repeat(20));
  }
}
