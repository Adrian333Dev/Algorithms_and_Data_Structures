function reversePrefix(word: string, ch: string): string {
  let i = word.indexOf(ch);
  if (i == -1) return word;
  const res = word.split('');
  let l = 0;
  while (l < i) ([res[l], res[i]] = [res[i], res[l]]), l++, i--;
  return res.join('');
}

console.log(reversePrefix('abcdefd', 'd'), ' == dcbaefd');
