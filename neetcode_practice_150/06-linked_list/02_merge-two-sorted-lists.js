/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const mergeTwoLists = (list1, list2) => {
	if (!list1 && !list2) return null;
	if (!list1) return list2;
	if (!list2) return list1;

	let head = null;
	if (list1.val > list2.val) {
		head = list2;
		list2 = list2.next;
	} else {
		head = list1;
		list1 = list1.next;
	}
	let curr = head;

	while (list1 && list2) {
		if (list1.val > list2.val) {
			curr.next = list2;
			list2 = list2.next;
		} else {
			curr.next = list1;
			list1 = list1.next;
		}
		curr = curr.next;
	}

	if (!list1 && list2) curr.next = list2;
	else if (list1 && !list2) curr.next = list1;

	return head;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));
