// Singly-linked lists are already defined with this interface:
// class ListNode<T> {
//   public T value { get; set; }
//   public ListNode<T> next { get; set; }
// }
//
int findMiddleElement(ListNode<int> l) {
    var counter = 0;
    var first = l;
    var second = l;

    while (null != first) {
        if (1 == (counter & 1)) {
            second = second.next;
        }

        first = first.next;
        ++counter;
    }

    return second.value;
}
