class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
	if (!head) return null;
	let prev = null,
		curr = head,
		next = null;

	while (curr.next) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	curr.next = prev;
	return curr;
};

// test
const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(reverseList(node1)); // 5 -> 4 -> 3 -> 2 -> 1 -> null
