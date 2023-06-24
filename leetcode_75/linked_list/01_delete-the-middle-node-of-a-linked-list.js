class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = (head) => {
	let curr = head, mid = curr, prev = null, size = 0;
	while (curr) {
		if (size % 2 === 1) prev = mid, mid = mid.next;
		curr = curr.next, size++;
  }
  if (prev) prev.next = mid?.next;
  else head = mid?.next;
	return head;
};

// head = [1,3,4,7,1,2,6]
const head = new ListNode(1);
[3, 4, 7, 1, 2, 6].reduce((acc, val) => acc.next = new ListNode(val), head);

console.log(deleteMiddle(head)); // [1,3,4,1,2,6]