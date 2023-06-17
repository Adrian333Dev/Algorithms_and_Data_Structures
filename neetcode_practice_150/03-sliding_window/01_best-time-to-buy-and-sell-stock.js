/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	let maxProfit = 0,
		l = 0,
		r = l + 1;
	while (r < prices.length) {
		if (prices[l] < prices[r]) {
			maxProfit = Math.max(maxProfit, prices[r++] - prices[l]);
		} else if (prices[l] > prices[r]) {
			l = r;
			r = l + 1;
		} else r++;
	}
	return maxProfit;
};

// test
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2
