/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
	let temp = x,
		negative = x < 0,
		opposite = 0;
	x = Math.abs(x);
	while (x > 0) {
		(opposite = opposite * 10 + (x % 10)), (x = Math.floor(x / 10));
  }
  if (negative) opposite *= -1;
	console.log(`opposite: ${opposite}`);
  return opposite === temp;
};

// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false

