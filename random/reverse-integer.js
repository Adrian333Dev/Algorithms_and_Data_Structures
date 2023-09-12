/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
	if (x === 0) return x;
	const negative = x < 0;
	x = Math.abs(x);
	let sum = 0;
	while (x > 0) (sum += x % 10), (x = Math.floor(x / 10)), x > 0 && (sum *= 10);
	return 2 ** 31 - 1 < sum || sum < -(2 ** 31) ? 0 : negative ? -sum : sum;
};

console.log(reverse(123));
console.log(reverse(-123));
