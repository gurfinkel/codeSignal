// Singly-linked lists are already defined with this interface:
// class ListNode<T> {
//   public T value { get; set; }
//   public ListNode<T> next { get; set; }
// }
//
ListNode<int> removeKFromList(ListNode<int> l, int k) {
    var currNode = l;
    ListNode<int> prevNode = null;

    while (null != currNode) {
        var nextNode = currNode.next;
        if (k == currNode.value) {
            if (null == prevNode) {
                l = nextNode;
            } else {
                prevNode.next = nextNode;
            }
        } else {
            prevNode = currNode;
        }

        currNode = nextNode;
    }

    return l;
}
