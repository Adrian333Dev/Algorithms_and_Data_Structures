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
  if (!head || !head.next) return head;
	let curr = head;
	let prev = null;
  let next = curr.next;
  while (curr) {
		curr.next = prev;
		prev = curr;
		curr = next;
		next = curr ? curr.next : null;
  }
  return prev;
};
