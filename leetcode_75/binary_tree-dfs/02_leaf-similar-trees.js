class TN {
	constructor(val = 0, left = null, right = null) {
		(this.val = val), (this.left = left), (this.right = right);
	}
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (r1, r2) => {
	const seq = (r, arr = []) =>
			!r ? arr : r.left || r.right ? (seq(r.left, arr), seq(r.right, arr)) : arr.push(r.val) && arr,
		seq1 = seq(r1), seq2 = seq(r2);
	return (seq1.length === seq2.length && seq1.every((leaf, i) => leaf === seq2[i]));
};

const root1 = new TN(
	3,
	new TN(5, new TN(6), new TN(2, new TN(7), new TN(4))),
	new TN(1, new TN(9), new TN(8))
);
const root2 = new TN(
	3,
	new TN(5, new TN(6), new TN(7)),
	new TN(1, new TN(4), new TN(2, new TN(9), new TN(8)))
);

console.log(leafSimilar(root1, root2));
