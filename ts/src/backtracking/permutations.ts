// function permute(nums: number[]): number[][] {
//   const res: number[][] = [];
//   backtrack(res, new Set(), nums);
//   return res;
// }

// function backtrack(list: number[][], set: Set<number>, nums: number[]): void {
//   if (set.size == nums.length) list.push([...set.values()]);
//   else {
//     for (const n of nums) {
//       if (set.has(n)) continue;
//       set.add(n), backtrack(list, set, nums), set.delete(n);
//     }
//   }
// }
