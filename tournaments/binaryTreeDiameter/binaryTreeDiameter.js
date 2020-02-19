//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function binaryTreeDiameter(t) {
    let result = 0;

    const dfs = function(node) {
        if (!node) {
            return 0;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        result = Math.max(result, 1 + left + right);

        return 1 + Math.max(left, right);
    };

    dfs(t);

    return result;
}
