/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
	let max = Math.max(...candies);
	return candies.map((c) => (c + extraCandies >= max ? true : false));
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
