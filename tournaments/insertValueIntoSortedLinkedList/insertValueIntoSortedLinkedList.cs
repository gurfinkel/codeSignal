// Singly-linked lists are already defined with this interface:
// class ListNode<T> {
//   public T value { get; set; }
//   public ListNode<T> next { get; set; }
// }
//
ListNode<int> insertValueIntoSortedLinkedList(ListNode<int> l, int value) {
    var curr = l;
    var prev = l;
    var newNode = new ListNode<int>();

    newNode.value = value;

    while (true) {
        if (null == curr && null == prev) {
            return newNode;
        } else if (null == curr) {
            prev.next = newNode;
            break;
        } else if (value < curr.value) {
            newNode.next = curr;
            if (l == prev) {
                return newNode;
            } else {
                prev.next = newNode;
                break;
            }
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    return l;
}
