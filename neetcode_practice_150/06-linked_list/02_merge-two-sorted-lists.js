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
  if (list1 === null) return list2;
  if (list2 === null) return list1;
	let head = null;
	if (list2.val < list1.val) {
		head = new ListNode(list2.val);
		list2 = list2.next;
	} else {
		head = new ListNode(list1.val);
		list1 = list1.next;
	}

	let curr = head;

	while (true) {
		if (list1 === null) {
			curr.next = list2;
			break;
		} else if (list2 === null) {
			curr.next = list1;
			break;
		}

		if (list2.val < list1.val) {
			curr.next = new ListNode(list2.val);
			list2 = list2.next;
		} else {
			curr.next = new ListNode(list1.val);
			list1 = list1.next;
    }
    curr = curr.next;
	}

	return head;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));
