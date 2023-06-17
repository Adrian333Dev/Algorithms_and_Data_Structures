/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	if (s.length < 2) return s.length;
	let exist = new Set();
	let max = 0,
		currMax = 0,
		l = 0,
		r = 0;

	while (r < s.length) {
		max = Math.max(currMax, max);
		let c = s[r];
		if (!exist.has(c)) {
			exist.add(c);
			currMax++;
		} else {
			if (s[r - 1] === c) {
				currMax = 1;
				while (l < r) exist.delete(s[l++]);
			} else {
				while (s[l] !== c) exist.delete(s[l++]);
				currMax = r - l;
			}
		}
		r++;
	}
	max = Math.max(currMax, max);
	return max;
};

// test
console.log(lengthOfLongestSubstring('abcabcbb') === 3 ? true : lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb') === 1 ? true : lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew') === 3 ? true : lengthOfLongestSubstring('pwwkew'));

console.log('--------------------------');

// advanced test
console.log(lengthOfLongestSubstring('') === 0 ? true : lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' ') === 1 ? true : lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('au') === 2 ? true : lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('dvdf') === 3 ? true : lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('abba') === 2 ? true : lengthOfLongestSubstring('abba'));

console.log('--------------------------');

console.log(lengthOfLongestSubstring('tmmzuxt') === 5 ? true : lengthOfLongestSubstring('tmmzuxt'));
console.log(lengthOfLongestSubstring('ckilbkd') === 5 ? true : lengthOfLongestSubstring('ckilbkd'));
