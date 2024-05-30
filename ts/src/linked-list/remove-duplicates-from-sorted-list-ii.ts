import { ListNode } from '../utils/nodes';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || head.next) return head;
  let [first, second, vHead, vCurr] = [head, head.next, null, null];
  while (second) {
    if (first.val == second.val) {
      while (second && first.val == second.val) second = second.next;
      if (!second) return vHead;
      first = second, second = second.next;
    } else {
      if (!vHead) vHead = first, vCurr = first;
    }
  }
  return head;
}
