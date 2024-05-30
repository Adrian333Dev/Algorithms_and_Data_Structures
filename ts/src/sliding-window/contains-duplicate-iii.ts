function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number
): boolean {
  // let [l, w, min] = [0, new Set<number>(), nums[0]];
  // for (let r = 0; r < nums.length; r++) {
  //   if (r - l > indexDiff) w.delete(nums[l++]);
  //   if (Math.abs(min - nums[r]) <= valueDiff) return true;
  //   else {

  //   }
  // }
  let [l, w, min] = [0, new Map<number, number>(), nums[0]];
  for (let r = 0; r < nums.length; r++) {
    if (r - l > indexDiff) w.set(nums[l], w.get(nums[l]) - 1);
    if (Math.abs(min - nums[r]) <= valueDiff) return true;
    else {
    }
  }
  return false;
}
// https://leetcode.com/problems/contains-duplicate-iii/description/
