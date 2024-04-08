import { logSinglyLinkedList } from "../utils/loggers.js";

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;
  let head, curr;
  if (list1.val < list2.val) (head = list1), (list1 = list1.next);
  else (head = list2), (list2 = list2.next);
  curr = head;
  while (list1 && list2) {
    if (list1.val < list2.val) (curr.next = list1), (list1 = list1.next);
    else (curr.next = list2), (list2 = list2.next);
    curr = curr.next;
  }

  if (list1) curr.next = list1;
  if (list2) curr.next = list2;

  return head;
};


// TEST CASES
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));  
logSinglyLinkedList(mergeTwoLists(list1, list2)); // 1 -> 1 -> 2 -> 3 -> 4 -> 4
