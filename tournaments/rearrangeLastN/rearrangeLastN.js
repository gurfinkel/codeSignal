// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function rearrangeLastN(l, n) {
    if (!n || !l || !l.next) {
        return l;
    }

    let nextNode = l;
    let prevNode = l;
    let count = n;

    while (nextNode.next) {
        nextNode = nextNode.next;

        if (count) {
            --count;
        } else {
            prevNode = prevNode.next;
        }
    }

    if (1 !== n && prevNode === l) {
        return l;
    }

    let head = prevNode.next;

    nextNode.next = l;
    prevNode.next = null;

    return head;
}
