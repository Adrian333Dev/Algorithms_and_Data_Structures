/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {
	if (guess(n) === 0) return n;
	let low = 1;
	let high = n;
	let mid = Math.floor((low + high) / 2);

	while (low < high) {
		const result = guess(mid);
		if (result === -1) high = mid;
		else if (result === 1) low = mid;
		else if (result === 0) return mid;
		mid = Math.floor((low + high) / 2);
  }
  
  return mid;
};

const guess = (num) => {
	const pick = 2;
	if (num > pick) return -1;
	if (num < pick) return 1;
	if (num === pick) return 0;
};

console.log(guessNumber(2));
