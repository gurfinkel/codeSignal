// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function nthElementFromTheEnd(r, n) {
    let l = r;

    while (r) {
        n ? n-- : l = l.next;
        r = r.next;
    }

    return n ? -1 : l.value;
}
