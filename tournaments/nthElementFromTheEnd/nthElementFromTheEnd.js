// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function nthElementFromTheEnd(l, n) {
    let r = l;
    
    while (l) {
        n ? n-- : r = r.next;
        l = l.next;
    }
    
    return n ? -1 : r.value;
}
