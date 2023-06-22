/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  const map = arr.reduce((map, n) => map.set(n, (map.get(n) || 0) + 1), new Map());
  return map.size === new Set(map.values()).size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true