/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  const len = height.length;
  const foward = Array(len).fill(0);
  const backwords = Array(len).fill(0);
  let res = 0;
  (foward[0] = height[0]), (backwords[len - 1] = height[len - 1]);
  for (let i = 1; i < len; i++) {
    foward[i] = Math.max(foward[i - 1], height[i]);
    backwords[len - i - 1] = Math.max(backwords[len - i], height[len - i - 1]);
  }
  for (let i = 0; i < len; i++)
    res += Math.max(0, Math.min(foward[i], backwords[i]) - height[i]);
  return res;
};

// TESTS
const tests = [
  {
    input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
    expected: 6,
  },
  {
    input: [4, 2, 0, 3, 2, 5],
    expected: 9,
  },
  {
    input: [4, 2, 3],
    expected: 1,
  },
  {
    input: [4, 2, 3, 1],
    expected: 1,
  },
  {
    input: [4, 2, 3, 1, 2],
    expected: 2,
  },
  {
    input: [4, 2, 3, 1, 2, 1],
    expected: 2,
  },
  {
    input: [4, 2, 3, 1, 2, 1, 3],
    expected: 6,
  },
  {
    input: [4, 2, 3, 1, 2, 1, 3, 2],
    expected: 6,
  },
  {
    input: [4, 2, 3, 1, 2, 1, 3, 2, 1],
    expected: 6,
  },
  {
    input: [4, 2, 3, 1, 2, 1, 3, 2, 1, 2],
    expected: 7,
  }
];

tests.forEach((t, i) => {
  const actual = trap(t.input);
  if (actual === t.expected) console.log(`Test case ${i + 1} PASS`);
  else
    console.log(
      `Test case ${i + 1} FAIL. Expected: ${t.expected} but got ${actual}`
    );
});
