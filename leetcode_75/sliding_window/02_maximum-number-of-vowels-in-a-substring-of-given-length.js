/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let max = 0, curr = 0, l = 0, r = k - 1, len = s.length;
  for (let i = 0; i < k; i++) if (vowels.has(s[i])) curr++;
  max = curr;
  while (r < len) {
    if (vowels.has(s[l])) curr--;
    if (vowels.has(s[++r])) curr++;
    l++;
    if (curr === k) return k;
    max = Math.max(curr, max);
  }
	return max;
};

console.log(maxVowels('abciiidef', 3)); // 3
console.log(maxVowels('aeiou', 2)); // 2
console.log(maxVowels('leetcode', 3)); // 2
console.log(maxVowels('novowels', 1)); // 1
console.log(maxVowels('tnfazcwrryitgacaabwm', 4)); // 3
