/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => {
  let res = [], i = 0;
  while (i < arr.length) res.push(arr.slice(i, i + size)), i += size;
  return res;
};
