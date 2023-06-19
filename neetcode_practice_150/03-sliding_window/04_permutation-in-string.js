/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
	const repo1 = {};
	for (let c of s1) repo1[c] = (repo1[c] || 0) + 1;
	// let l = (r = 0);
	let l = 0;
	while (l < s2.length) {
		const c = s2[l];
		if (repo1[c]) {
			let r = l + s1.length;
			let repo2 = {};
		}
	}
	return false;
};

const areSame = (map1, map2) => {
	for (let c of map1.keys()) if (map1.get(c) !== map2.get(c)) return false;
	return true;
};

// test code
console.log(checkInclusion('ab', 'eidbaooo')); // true
console.log(checkInclusion('ab', 'eidboaoo')); // false
console.log(checkInclusion('adc', 'dcda')); // true
console.log(checkInclusion('hello', 'ooolleoooleh')); // false
