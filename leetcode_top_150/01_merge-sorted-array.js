/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = (nums1, m, nums2, n) => {
	if (n === 0) return;
	else if (m === 0)
		for (let i = 0; i < n; i++) {
			nums1[i] = nums2[i];
		}

	let idx = nums1.length - 1;
	let idx1 = m - 1;
	let idx2 = n - 1;

	while (idx >= 0) {
		if (idx2 < 0) return;
		else if (idx1 < 0)
			while (idx >= 0) {
				nums1[idx] = nums2[idx2];
				nums2[idx2] = 0;
				idx--;
				idx2--;
			}
		else if (nums1[idx1] >= nums2[idx2]) {
			nums1[idx] = nums1[idx1];
			idx--;
			idx1--;
		} else {
			nums1[idx] = nums2[idx2];
			nums2[idx2] = 0;
			idx--;
			idx2--;
		}
	}
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
