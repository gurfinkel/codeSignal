// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function sortZeroOneTwoList(l) {
    if (!l) {
        return l;
    }

    let zeroCounter = 0;
    let oneCounter = 0;
    let twoCounter = 0;

    while (l) {
        if (!l.value) {
            ++zeroCounter;
        } else if (1 === l.value) {
            ++oneCounter;
        } else {
            ++twoCounter;
        }
        l = l.next;
    }

    let root = null;

    while (zeroCounter || oneCounter || twoCounter) {
        let nextNode = new ListNode(0);
        if (zeroCounter) {
            --zeroCounter;
        } else if (oneCounter) {
            nextNode.value = 1;
            --oneCounter;
        } else {
            nextNode.value = 2;
            --twoCounter;
        }
        if (!root) {
            root = nextNode;
        } else if (!l) {
            l = nextNode;
            root.next = l;
        } else {
            l.next = nextNode;
            l = l.next;
        }
    }

    return root;
}
