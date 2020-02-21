// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    const store = [];
    while (l) {
        store.push(l.value);
        l = l.next;
    }
    return store.join('') === store.reverse().join('');
}
