/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
    if (isBadVersion(1)) return 1;
    if (!isBadVersion(n)) return n;
    if (!isBadVersion(n - 1) && isBadVersion(n)) return n;
		let left = 2;
		let right = n;
    let mid = Math.floor((left + right) / 2);

		while (left <= right) {
			const isBad = isBadVersion(mid);
			const isFirstBad = isBad && !isBadVersion(mid - 1);
			if (isFirstBad) return mid;
			else if (isBad) right = mid;
			else left = mid;
			mid = Math.floor((left + right) / 2);
		}
	};
};

const isBadVersion = (version) => {
	const pick = 3;
	if (version >= pick) return true;
	return false;
};

const firstBadVersion = solution(isBadVersion);
console.log(firstBadVersion(3));