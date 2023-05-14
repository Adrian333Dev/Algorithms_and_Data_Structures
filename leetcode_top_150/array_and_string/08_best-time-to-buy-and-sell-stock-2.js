/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) => {
	let profit = 0;
	// prices: [7, 3, 5, 1, 6, 4]
  // prices: [1, 2, 3, 4, 5]
  // prices: [7, 6, 4, 3, 1]
  // prices: [3, 3, 5, 0, 0, 3, 1, 4]
	let curr = 0;
	let next = 1;
	let bought = false;

	while (next < prices.length) {
		if (prices[curr] < prices[next]) {
			if (!bought) {
				profit += prices[curr];
      } else {
        next++;
      }
		} else if (prices[curr] > prices[next]) {
    } else {
      next++;
    }
	}
};
