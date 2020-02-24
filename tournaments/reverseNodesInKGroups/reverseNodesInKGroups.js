// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverseNodesInKGroups(head, k) {
    if (1 >= k || !head || !head.next) {
        return head;
    }
    
    let listLength = 0;
    let nextNode = head;
    while (nextNode) {
        ++listLength;
        nextNode = nextNode.next;
        if (k <= listLength) {
            break;
        }
    }
    
    if (k > listLength) {
        return head;
    }
    
    let curr = head;
    let prev = null;
    
    for (let i = 1; k >= i; ++i) {
        if (!curr) {
            return head;
        }
        
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    head.next = reverseNodesInKGroups(curr, k);
    
    head = prev;
    
    return head;
}
