/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  let i = 0, j = 0, str = '';
  while (i < word1.length && j < word2.length) str += word1[i++] + word2[j++];
  while (i < word1.length) str += word1[i++];
  while (j < word2.length) str += word2[j++];
  return str;
};

console.log(mergeAlternately('ab', 'pqrs')); // apbqcr