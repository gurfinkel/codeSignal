// Singly-linked lists are already defined with this interface:
// class ListNode<T> {
//   public T value { get; set; }
//   public ListNode<T> next { get; set; }
// }
//
ListNode<int> addTwoHugeNumbers(ListNode<int> a, ListNode<int> b) {
    ListNode<int> aPrevNode = null;
    ListNode<int> bPrevNode = null;
    var aNextNode = a;
    var bNextNode = b;
    var aLength = 0;
    var bLength = 0;

    while (null != aNextNode || null != bNextNode) {
        if (null != aNextNode) {
            var temp = aNextNode.next;
            aNextNode.next = aPrevNode;
            aPrevNode = aNextNode;
            aNextNode = temp;
            ++aLength;
        }

        if (null != bNextNode) {
            var temp = bNextNode.next;
            bNextNode.next = bPrevNode;
            bPrevNode = bNextNode;
            bNextNode = temp;
            ++bLength;
        }
    }

    /*var aTemp = aPrevNode;
    var bTemp = bPrevNode;
    Console.WriteLine("A:");
    while (null != aTemp) {
        Console.Write("{0, 5}", aTemp.value);
        aTemp = aTemp.next;
    }
    Console.WriteLine();
    Console.WriteLine("B:");
    while (null != bTemp) {
        Console.Write("{0, 5}", bTemp.value);
        bTemp = bTemp.next;
    }*/

    var memory = 0;
    var newValue = 0;

    while (null != aPrevNode || null != bPrevNode) {
        if (aLength > bLength) {
            newValue = (memory + aPrevNode.value);

            if (null != bPrevNode) {
                newValue += bPrevNode.value;
                bPrevNode = bPrevNode.next;
            }

            aPrevNode.value = newValue % 10000;
            memory = newValue / 10000;

            var temp = aPrevNode.next;
            aPrevNode.next = aNextNode;
            aNextNode = aPrevNode;
            aPrevNode = temp;
        } else {
            newValue = (memory + bPrevNode.value);

            if (null != aPrevNode) {
                newValue += aPrevNode.value;
                aPrevNode = aPrevNode.next;
            }

            bPrevNode.value = newValue % 10000;
            memory = newValue / 10000;

            var temp = bPrevNode.next;
            bPrevNode.next = bNextNode;
            bNextNode = bPrevNode;
            bPrevNode = temp;
        }
    }

    if (0 != memory) {
        var newRoot = new ListNode<int>();
        newRoot.value = memory;
        newRoot.next = (aLength > bLength ? a : b);

        return newRoot;
    }

    return aLength > bLength ? a : b;
}
