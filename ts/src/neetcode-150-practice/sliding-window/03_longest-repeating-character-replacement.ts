const characterReplacement = (s: string, k: number): number => {
  const count = Array(26).fill(0);
  let l = 0,
    maxCount = 0,
    maxLen = 0;
  for (let r = 0; r < s.length; r++) {
    maxCount = Math.max(maxCount, ++count[s.charCodeAt(r) - 65]);
    while (r - l + 1 - maxCount > k) {
      count[s.charCodeAt(l++) - 65]--;
    }
    maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
};
