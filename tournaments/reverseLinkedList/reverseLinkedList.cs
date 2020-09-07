// Singly-linked lists are already defined with this interface:
// class ListNode<T> {
//   public T value { get; set; }
//   public ListNode<T> next { get; set; }
// }
//
ListNode<int> reverseLinkedList(ListNode<int> head) {
    if (null == head || null == head.next) {
        return head; // 2
    }
    // 1 -> 2 -> 3 -> null
    var newTail = head.next; // 3
    var newHead = reverseLinkedList(newTail); // 3

    newTail.next = head; // 3 -> 2
    head.next = null; // 2 -> null

    return newHead; // 3
}
