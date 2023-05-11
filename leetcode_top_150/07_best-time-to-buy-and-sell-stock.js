/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) => {
	let left = (mainLeft = 0);
	let right = (mainRight = 1);
	while (right < prices.length) {
		if (prices[left] >= prices[right]) {
			left++;
			if (left === right) right++;
		} else {
			let currProfit = prices[right] - prices[left];
			let profit = prices[mainRight] - prices[mainLeft];
			if (currProfit > profit) {
				mainLeft = left;
				mainRight = right;
			}
			right++;
		}
	}

	let profit = prices[mainRight] - prices[mainLeft];
	return profit > 0 ? profit : 0;
};

console.log(maxProfit([7, 3, 5, 1, 6, 4])); // 5