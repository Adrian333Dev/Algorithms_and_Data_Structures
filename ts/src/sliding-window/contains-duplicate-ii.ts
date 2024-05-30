function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let [l, w] = [0, new Set<number>()];
  for (let r = 0; r < nums.length; r++) {
    if (r - l > k) w.delete(nums[l++]);
    if (w.has(nums[r])) return true;
    else w.add(nums[r]);
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
