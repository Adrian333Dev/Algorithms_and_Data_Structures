/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
	let profit = 0,
		l = 0,
		r = 1;
	const profitable = (buy, sell) => fee + prices[buy] < prices[sell];
	while (r < prices.length) {
		if (prices[l] > prices[l + 1]) l++, l === r && (r = l + 1);
    else if (profitable(l, r)) {
      // console.log(`buy at ${l} for ${prices[l]} and sell at ${r} for ${prices[r]} with profit ${prices[r] - prices[l] - fee}`);
			profit += prices[r] - prices[l] - fee;
			l = r + 1;
			r += 2;
		} else r++;
	}
	return profit;
};

// console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // 6 explanation: buy at 1, sell at 7, buy at 3, sell at 10
// console.log(maxProfit([1, 4, 6, 2, 8, 3, 10, 14], 3)); // 13
