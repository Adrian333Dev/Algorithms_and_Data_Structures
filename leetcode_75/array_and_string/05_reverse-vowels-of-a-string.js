/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  s = s.split('');
  const swap = (i, j) => [s[i], s[j]] = [s[j], s[i]];
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let l = 0, r = s.length - 1;
  while (l < r) {
    while (l < r && !vowels.has(s[l])) l++;
    while (l < r && !vowels.has(s[r])) r--;
    if (l < r) swap(l++, r--);
  }
	return s.join('');
};

console.log(reverseVowels('hello')); // 'holle'