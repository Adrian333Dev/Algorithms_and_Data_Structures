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
// const reverseList = (head, prev = null) => {
//   if (head !== null) {
//     const next = head.next;
//     head.next = prev;
//     return reverseList(next, head);
//   }
//   return prev;
// };

const reverseList = (head) => {
  let curr = head,
    prev = null;

  while (curr) {
    const next = curr.next;
    (curr.next = prev), (prev = curr), (curr = next);
  }

  return prev;
};

// Test case
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(reverseList(head)); // 5 -> 4 -> 3 -> 2 -> 1
