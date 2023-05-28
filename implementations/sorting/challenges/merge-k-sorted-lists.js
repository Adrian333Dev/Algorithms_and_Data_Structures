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
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

// const mergeKLists = (lists) => {
// 	lists = lists.filter((list) => list !== null);
// 	if (lists.length === 0) return null;
// 	if (lists.length === 1) return lists[0];

// 	let head = null;
// 	let curr = null;
// 	let len = lists.length;

// 	while (len) {
// 		let minIdx = 0;
// 		for (let i = 0; i < len; i++) {
// 			const list = lists[i];
// 			if (lists[minIdx] === null) minIdx = i;
// 			else if (list.val < lists[minIdx].val) minIdx = i;
// 		}
// 		if (head !== null) {
// 			curr.next = new ListNode(lists[minIdx].val);
// 			curr = curr.next;
// 		} else {
// 			head = new ListNode(lists[minIdx].val);
// 			curr = head;
// 		}

// 		lists[minIdx] = lists[minIdx].next;
// 		if (lists[minIdx] === null) {
// 			lists[minIdx] = lists[len - 1];
// 			len--;
// 		}
// 	}

// 	return head;
// };

// tests

const merge = (list1, list2) => {
	if (list1 === null) return list2;
	if (list2 === null) return list1;

	let head;
	let curr;
	let min = list1.val;
	if (list2.val < list1.val) {
		min = list2.val;
		list2 = list2.next;
	} else list1 = list1.next;

	head = new ListNode(min);
	curr = head;

	while (list1 !== null && list2 !== null) {
		if (list2.val < list1.val) {
			curr.next = new ListNode(list2.val);
			curr = curr.next;
			list2 = list2.next;
		} else {
			curr.next = new ListNode(list1.val);
			curr = curr.next;
			list1 = list1.next;
		}
	}
	while (list1 !== null) {
		curr.next = new ListNode(list1.val);
		curr = curr.next;
		list1 = list1.next;
	}
	while (list2 !== null) {
		curr.next = new ListNode(list2.val);
		curr = curr.next;
		list2 = list2.next;
	}

	return head;
};

const mergeKLists = (lists) => {
	if (lists.length === 0) return null;
	if (lists.length === 1) return lists[0];

	let head = lists[0];
	for (let i = 1; i < lists.length; i++) {
		head = merge(head, lists[i]);
	}

	return head;
};

const printList = (head) => {
	let curr = head;
	let str = '';
	while (curr !== null) {
		str += curr.val + ',';
		curr = curr.next;
	}
	return str;
};

const list1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(8, new ListNode(9, new ListNode(10))))));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6, new ListNode(7)));

const result = mergeKLists([list1, list2, list3]);

console.log(printList(result) === '1,1,2,3,4,4,5,6,7,8,9,10,' ? true : printList(result));