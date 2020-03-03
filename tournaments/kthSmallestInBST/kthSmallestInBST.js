//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
    const result = [];
    const store = [];
    let curr = t;

    while (curr || store.length) {
        while (curr) {
            store.push(curr);
            curr = curr.left;
        }

        curr = store.pop();
        result.push(curr.value);
        curr = curr.right;
    }

    return result[k - 1];
}
