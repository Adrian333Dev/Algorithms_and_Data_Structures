function findSubstring(s: string, words: string[]): number[] {
  if (!words.length || !words[0].length) return [];
  const [firstLetterMap, res, wordLen, allWordLen] = [
    new Map<string, number>(words.map((word, i) => [word[0], i])),
    [] as number[],
    words[0].length,
    words[0].length * words.length,
  ];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (firstLetterMap.has(c)) {
      let [l, r] = [i, i - 1 + allWordLen];
    }
  }
  return [];
}

findSubstring('', ['bar', 'foo', 'the']);
