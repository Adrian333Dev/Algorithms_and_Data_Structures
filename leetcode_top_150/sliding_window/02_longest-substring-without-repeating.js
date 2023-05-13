/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = (s) => {
	if (s.length < 2) return s.length;
	let str = '';
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		const c = s[i];
		const idx = str.indexOf(c);
		if (idx >= 0) {
			max = Math.max(str.length, max);
			str = str.slice(idx + 1);
		}
		str += c;
	}
	max = Math.max(str.length, max);
	return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('aabaab!bb'));
