function getMaxPalindrome(l: number, r: number, s: string) {
  while (l >= 0 && r < s.length && s[l] == s[r]) l--, r++;
  return [++l, --r, r - l + 1];
}

function longestPalindrome(s: string): string {
  let [maxPalStart, maxPalEnd, maxPalLen, len] = [0, 0, 0, s.length];
  for (let i = 0; i < len; i++) {
    const oddPal = getMaxPalindrome(i, i, s);
    const evenPal = getMaxPalindrome(i, i + 1, s);
    if (oddPal[2] > maxPalLen)
      (maxPalLen = oddPal[2]),
        (maxPalStart = oddPal[0]),
        (maxPalEnd = oddPal[1]);
    if (evenPal[2] > maxPalLen)
      (maxPalLen = evenPal[2]),
        (maxPalStart = evenPal[0]),
        (maxPalEnd = evenPal[1]);
  }
  return s.slice(maxPalStart, maxPalEnd + 1);
}

console.log(longestPalindrome('babad'), ' === bab/aba');
console.log(longestPalindrome('cbbd'), ' === bb');

// let [l, r, currLen] = [i, i, 0];
// while (l >= 0 && r < len && s[l] == s[r]) {
//   currLen = r - l + 1;
//   if (currLen > maxPalLen)
//     (maxPalLen = currLen), (maxPalStart = l), (maxPalEnd = r);
//   l--, r++;
// }
// (l = i), (r = i + 1);
// while (l >= 0 && r < len && s[l] == s[r]) {
//   currLen = r - l + 1;
//   if (currLen > maxPalLen)
//     (maxPalLen = currLen), (maxPalStart = l), (maxPalEnd = r);
//   l--, r++;
// }
