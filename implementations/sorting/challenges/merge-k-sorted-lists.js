/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const mergeKLists = (lists) => {
	lists = lists.filter((list) => list !== null);
	if (lists.length === 0) return null;
	if (lists.length === 1) return lists[0];

	let head = null;
	let curr = null;
	let len = lists.length;

	while (len) {
		let minIdx = 0;
		for (let i = 0; i < len; i++) {
			const list = lists[i];
			if (lists[minIdx] === null) minIdx = i;
			else if (list.val < lists[minIdx].val) minIdx = i;
		}
		if (head !== null) {
			curr.next = new ListNode(lists[minIdx].val);
			curr = curr.next;
		} else {
			head = new ListNode(lists[minIdx].val);
			curr = head;
		}

		lists[minIdx] = lists[minIdx].next;
		if (lists[minIdx] === null) {
			lists[minIdx] = lists[len - 1];
			len--;
		}
	}

	return head;
};

// tests

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const printList = (head) => {
	let curr = head;
	let str = '';
	while (curr !== null) {
		str += curr.val + ',';
		curr = curr.next;
	}
	return str;
};

console.log(printList(mergeKLists([list1, list2, list3])));
