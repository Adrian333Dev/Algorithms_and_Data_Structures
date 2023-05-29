/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
	let k = 1;
	let max = piles[0];
	for (let pile of piles) if (pile > max) max = pile;
	let mid = Math.floor((k + max) / 2);
	let minHours = h;
	while (k <= max) {
    let i = 0;
    let hours = 0;
		while (i < piles.length) {}
	}
};
