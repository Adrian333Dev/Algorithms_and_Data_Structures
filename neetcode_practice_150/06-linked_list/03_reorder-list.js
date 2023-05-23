/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

const reorderList = (head) => {
	if (!head || !head.next) return head;

	let left = head;
	for (var len = 0; left; len++) left = left.next;
	left = head;

	let isEven = len % 2 === 0;
	let mid = isEven ? len / 2 : Math.floor(len / 2) + 1;
	let right = head;
	for (let i = 0; i < mid - 1; i++) right = right.next;

	let prevRight = null;
	let temp = right;
	right = right.next;
	let nextRight = right.next;
	while (right) {
		right.next = prevRight;
		prevRight = right;
		right = nextRight;
		nextRight = right ? right.next : null;
	}
	temp.next = prevRight;
	right = temp.next;

	while (true) {
		if (!right) break;
		if (!right.next && isEven) break;
		nextRight = right.next;
		right.next = left.next;
		left.next = right;
		
		left = left.next.next;
		temp.next = nextRight;
		right = nextRight;
	}
};

const printList = (head) => {
	let str = 'Print List: ';
	let temp = head;
	while (temp) {
		str += temp.val + ', ';
		temp = temp.next;
	}
	console.log(str);
};

const head1 = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
	)
);

const head2 = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

const head3 = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4)))
);

reorderList(head1);
reorderList(head2);
reorderList(head3);

printList(head1); // 1, 6, 2, 5, 3, 4
printList(head2); // 1, 5, 2, 4, 3
printList(head3); // 1, 4, 2, 3
