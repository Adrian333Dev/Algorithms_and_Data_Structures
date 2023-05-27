/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

const addTwoNumbers = (l1, l2) => {
	// 5 -> 6 -> 4
	// 2 -> 4 -> 3 -> 3

	let head, curr;

	if (l1 || l2) {
		let sum = (l1?.val || 0) + (l2?.val || 0);
		head = new ListNode(sum);
		curr = head;
		l1 = l1?.next || null;
		l2 = l2?.next || null;
	}

	while (l1 || l2) {
		let sum = (l1?.val || 0) + (l2?.val || 0);
    let remain = sum % 10;
    
    // if 
	}
};
