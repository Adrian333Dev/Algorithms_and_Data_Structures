/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  const canFinish = (speed) => {
    let currH = 0;
    for (const pile of piles) {
      currH += Math.ceil(pile / speed);
      if (currH > h) return false;
    }
    return true;
  };

  let l = 1, r = Math.max(...piles);
  while (l < r) {
    const avg = Math.floor((l + r) / 2);
    if (canFinish(avg)) r = avg;
    else l = avg + 1;
  }
  return l;
};

// TEST CASES
const tests = [
  [[3, 6, 7, 11], 8, 4],
  [[30, 11, 23, 4, 20], 5, 30],
  [[30, 11, 23, 4, 20], 6, 23],
];

for (const [piles, h, expected] of tests) {
  const result = minEatingSpeed(piles, h);
  console.log(result === expected ? 'PASS' : 'FAIL', result);
}
