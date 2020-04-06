//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function digitTreeSum(t) {
    const result = [];

    if (t) {
        dfs(t, result);
    }

    return result.reduce((acc, curr) => acc + curr);
}

function dfs(t, result, number = 0) {
    number = 10 * number + t.value;

    if (t.left) dfs(t.left, result, number);
    if (t.right) dfs(t.right, result, number);
    if (!t.left && !t.right) result.push(number);
}
