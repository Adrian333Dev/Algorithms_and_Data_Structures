function canJump(nums: number[]): boolean {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    // if (i > maxReach) return false;
    // maxReach = Math.max(maxReach, i + nums[i])
    // if (maxReach >= nums.length - 1) return true;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (i >= maxReach) return false;
    else if (maxReach >= nums.length - 1) return true;
  }
  return true;
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
