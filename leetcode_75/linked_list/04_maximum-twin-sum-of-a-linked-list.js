class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

const reverseList = (head) => {
	let prev = null, curr = head, next = null;
	while (curr)
		(next = curr.next), (curr.next = prev), (prev = curr), (curr = next);
	return prev;
};


/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = (head) => {
	if (!head || !head.next) return 0;
	let mid = head, last = head, count = 0, max = 0;
	while (last) {
		if (count % 2 === 1) mid = mid.next;
		(last = last.next), count++;
  }
  let right = reverseList(mid);
  while (right) {
    max = Math.max(max, head.val + right.val);
    head = head.next, right = right.next;
  }
  return max;
};

const head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
console.log(pairSum(head));
