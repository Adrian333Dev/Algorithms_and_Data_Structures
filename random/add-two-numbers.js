class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
	if (!l1 && !l2) return 0;
	if (!l1) return l2;
	if (!l2) return l1;

	let addFromPrev = l1.val + l2.val > 9,
		head = new ListNode((l1.val + l2.val) % 10),
		curr = head;
	(l1 = l1.next), (l2 = l2.next);
	while (l1 && l2) {
		let sum = l1.val + l2.val;
		if (addFromPrev) sum++, (addFromPrev = false);
		if (sum > 9) (sum = sum % 10), (addFromPrev = true);
		(l1 = l1.next), (l2 = l2.next), (curr.next = new ListNode(sum)), (curr = curr.next);
	}
	while (l1) {
		let sum = l1.val;
		if (addFromPrev) sum++, (addFromPrev = false);
		if (sum > 9) (sum = sum % 10), (addFromPrev = true);
		(l1 = l1.next), (curr.next = new ListNode(sum)), (curr = curr.next);
	}
	while (l2) {
		let sum = l2.val;
		if (addFromPrev) sum++, (addFromPrev = false);
		if (sum > 9) (sum = sum % 10), (addFromPrev = true);
		(l2 = l2.next), (curr.next = new ListNode(sum)), (curr = curr.next);
	}
	if (addFromPrev) curr.next = new ListNode(1);
	return head;
};

const printList = (head) => {
	let str = '';
	while (head) (str += head.val + ' -> '), (head = head.next);
	console.log(str);
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3))),
	l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

printList(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8

l1 = new ListNode(0);
l2 = new ListNode(0);

printList(addTwoNumbers(l1, l2)); // 0

l1 = new ListNode(
	9,
	new ListNode(
		9,
		new ListNode(
			9,
			new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
		)
	)
);
l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
printList(addTwoNumbers(l1, l2)); // 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
