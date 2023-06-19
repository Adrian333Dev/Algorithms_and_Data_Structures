/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	let set = new Set();
	let l = 0,
		r = 0,
		max = 0,
		curr = 0;
	while (r < s.length) {
		const c = s[r];
		if (!set.has(c)) {
			set.add(c);
			curr++;
		} else {
			if (s[r - 1] === c) {
				if (curr > max) max = curr;
				l = r;
				set.clear();
				set.add(c);
				curr = 1;
			} else {
				if (curr > max) max = curr;
				while (s[l++] !== c) {
					set.delete(s[l - 1]);
					curr--;
				}
			}
		}
		r++;
	}
	if (curr > max) max = curr;
	return max;
};

// test
console.log(
	lengthOfLongestSubstring('abcabcbb') === 3
		? true
		: lengthOfLongestSubstring('abcabcbb')
);
console.log(
	lengthOfLongestSubstring('bbbbb') === 1
		? true
		: lengthOfLongestSubstring('bbbbb')
);
console.log(
	lengthOfLongestSubstring('pwwkew') === 3
		? true
		: lengthOfLongestSubstring('pwwkew')
);

console.log('--------------------------');

// advanced test
console.log(
	lengthOfLongestSubstring('') === 0 ? true : lengthOfLongestSubstring('')
);
console.log(
	lengthOfLongestSubstring(' ') === 1 ? true : lengthOfLongestSubstring(' ')
);
console.log(
	lengthOfLongestSubstring('au') === 2 ? true : lengthOfLongestSubstring('au')
);
console.log(
	lengthOfLongestSubstring('dvdf') === 3
		? true
		: lengthOfLongestSubstring('dvdf')
);
console.log(
	lengthOfLongestSubstring('abba') === 2
		? true
		: lengthOfLongestSubstring('abba')
);

console.log('--------------------------');

console.log(
	lengthOfLongestSubstring('tmmzuxt') === 5
		? true
		: lengthOfLongestSubstring('tmmzuxt')
);
console.log(
	lengthOfLongestSubstring('ckilbkd') === 5
		? true
		: lengthOfLongestSubstring('ckilbkd')
);

console.log(
	lengthOfLongestSubstring('cdd') === 2 ? true : lengthOfLongestSubstring('cdd')
);

console.log(
	lengthOfLongestSubstring('qrsvbspk') === 5
		? true
		: lengthOfLongestSubstring('qrsvbspk')
);
