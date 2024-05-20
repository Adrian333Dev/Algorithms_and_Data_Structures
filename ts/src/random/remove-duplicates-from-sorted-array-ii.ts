function removeDuplicates(nums: number[]): number {
  let l = 0, r = 0, n: number | null = null, count: number = 0;
  while (r < nums.length) {
    (n = nums[r++]), (count = 1), (nums[l++] = n);
    while (nums[r] == n && count < 2) (nums[l] = n), count++, l++, r++;
    while (nums[r] == n) r++;
  }
  return l;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]), '=== 5'); // 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]), '=== 7'); // 7
console.log(removeDuplicates([1, 1, 1, 1, 1]), '=== 2'); // 2
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 5]), '=== 8'); // 8
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3, 4, 4, 4]), '=== 8'); // 8
console.log(removeDuplicates([1, 1, 1]), '=== 2'); // 2
console.log(removeDuplicates([1, 2, 2, 3]), '=== 4');
// console.log(removeDuplicates(), '=== 2');
// console.log(removeDuplicates()); //
// console.log(removeDuplicates()); //
