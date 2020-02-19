//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function largestValuesInTreeRows(t) {
    const store = [];

    const search = function(node, depth = 0) {
        if (node) {
            if (!store[depth] || node.value > store[depth]) {
                store[depth] = node.value;
            }

            search(node.left, depth + 1);
            search(node.right, depth + 1);
        }
    };

    search(t);

    return store;
}
