/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
	if (word1.length !== word2.length) return false;
	const m1 = new Map(), m2 = new Map(), f = new Map();
	for (let i = 0; i < word1.length; i++) {
		let c1 = word1[i], c2 = word2[i];
		m1.set(c1, (m1.get(c1) || 0) + 1), m2.set(c2, (m2.get(c2) || 0) + 1);
	}
  for (let [_, v] of m1.entries()) f.set(v, (f.get(v) || 0) + 1);
	for (let [k, v] of m2.entries()) {
		if (!f.has(v) || !m1.has(k)) return false;
		if (f.get(v) === 1) f.delete(v);
		else f.set(v, f.get(v) - 1);
	}
	if (f.size) return false;
	return true;
};

console.log(closeStrings('abc', 'bca') === true); // true
console.log(closeStrings('a', 'aa') === false); // false
console.log(closeStrings('cabbba', 'abbccc') === true); // true
console.log(closeStrings('cabbba', 'aabbss') === false); // false
console.log(closeStrings('uau', 'ssx') === false); // false
