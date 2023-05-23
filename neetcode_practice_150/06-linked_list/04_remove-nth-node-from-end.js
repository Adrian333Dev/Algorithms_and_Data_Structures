/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

const removeNthFromEnd = (head, n) => {
	if (!head || !head.next) return null;
	let left = head;
	let right = head;
	let overflow = false;
	for (let i = 0; i < n; i++) {
		if (!right.next) return left.next;
	}

	let prev = null;
	while (right) {
		right = right.next;
		left = left.next;
		prev = left;
	}

	if (!prev) return left.next;
	prev.next = left.next;
	return head;
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
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(removeNthFromEnd(head1, 2)); // [1,2,3,5] 4
printList(head1); // 1,2,3,5,

// [1,2] 2

const head2 = new ListNode(1, new ListNode(2));

console.log(removeNthFromEnd(head2, 2));
printList(head2); // 2,
