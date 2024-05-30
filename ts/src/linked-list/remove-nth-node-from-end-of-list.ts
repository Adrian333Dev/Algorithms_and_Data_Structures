import { ListNode } from '../utils/nodes';
import { logLinkedList } from '../utils/tests';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;
  let [l, r, diff, len] = [head, head, 0, 0];
  while (r && diff <= n) (r = r.next), diff++, len++;
  while (r) (l = l.next), (r = r.next), len++;
  if (len == n) return head.next;
  l.next = n == 1 ? null : l.next.next;
  return head;
}

const h1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// removeNthFromEnd(h1, 2);
// logLinkedList(h1);

const h2 = new ListNode(1);

removeNthFromEnd(h2, 1);
logLinkedList(h2);
