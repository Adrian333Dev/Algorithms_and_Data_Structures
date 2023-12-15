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
const swapPairs = (head) => {
	if (!head || !head.next) return head;
	let [newHead, nextHead] = [head.next, head.next.next];
	(head.next = nextHead),
		(newHead.next = head),
		(head.next = swapPairs(nextHead));
	return newHead;
};

// TEST

const createListFromArray = (arr) => {
	if (!arr.length) return null;
	let head = new ListNode(arr[0]);
	let current = head;
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}
	return head;
};

const listToArray = (head) => {
	let arr = [];
	let current = head;
	while (current) {
		arr.push(current.val);
		current = current.next;
	}
	return arr;
};

const test = (arr, expected) => {
	let head = createListFromArray(arr);
	head = swapPairs(head);
	let actual = listToArray(head);
	console.log('expected', expected);
	console.log('actual', actual);
	console.log();
};

test([1, 2, 3, 4], [2, 1, 4, 3]);
