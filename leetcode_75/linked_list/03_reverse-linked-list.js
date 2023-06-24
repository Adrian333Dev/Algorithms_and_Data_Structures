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
const reverseList = (head) => {
	if (!head || !head.next) return head;
	let prev = null,
		curr = head,
		next = null;
	while (curr)
		(next = curr.next), (curr.next = prev), (prev = curr), (curr = next);
	return prev;
};

const test = (head) => {
	let curr = head,
		output = '';
	while (curr)
		(output += `${curr.val}${curr.next ? '->' : ''}`), (curr = curr.next);
	console.log(output);
};

const head = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
test(head);
test(reverseList(head));
