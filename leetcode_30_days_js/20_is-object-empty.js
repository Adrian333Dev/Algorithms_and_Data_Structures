/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
const isEmpty = (obj) => {
  if (typeof obj === 'object') return !Object.keys(obj).length;
  return !obj.length;
};
