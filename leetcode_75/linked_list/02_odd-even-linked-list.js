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
const oddEvenList = (oddHead) => {
	let odd = oddHead, evenHead = oddHead?.next, even = evenHead;
	if (!odd || !even || !even.next) return oddHead;
	(odd.next = even.next), (odd = odd.next);
	while (odd && odd.next) {
		(even.next = odd.next), (even = even.next);
		(odd.next = even.next), odd.next && (odd = odd.next);
	}
	if (even) even.next = null;
	odd.next = evenHead;
	return oddHead;
};

const head1 = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

oddEvenList(head1);

let curr = head1,
	output = '';
while (curr)
	(output += `${curr.val}${curr.next ? '->' : ''}`), (curr = curr.next);
console.log(output);

const head2 = new ListNode(
	2,
	new ListNode(
		1,
		new ListNode(
			3,
			new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7))))
		)
	) // 2->3->6->7->1->5->4
);

oddEvenList(head2);

(curr = head2), (output = '');
while (curr)
	(output += `${curr.val}${curr.next ? '->' : ''}`), (curr = curr.next);
console.log(output); // 2->3->6->7->1->5->4

// [1,2,3,4,5,6,7,8]
const head3 = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(
			3,
			new ListNode(
				4,
				new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))
			)
		)
	)
);

oddEvenList(head3);

(curr = head3), (output = '');
while (curr)
	(output += `${curr.val}${curr.next ? '->' : ''}`), (curr = curr.next);
console.log(output); // 1->3->5->7->2->4->6->8
