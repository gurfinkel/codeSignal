// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    const head = new ListNode(0);
    let prev = head;

    while (l1 || l2) {
        if (!l2 || (l1 && l1.value <= l2.value)) {
            prev.next = l1;
            prev = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            prev = l2;
            l2 = l2.next;
        }
    }

    return head.next;
}
