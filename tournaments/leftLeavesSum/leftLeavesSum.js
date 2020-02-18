//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function leftLeavesSum(t, isLeft = false) {
    if (!t) {
        return 0;
    }

    if (!t.left && !t.right) {
        return isLeft ? t.value : 0;
    }

    return leftLeavesSum(t.left, true) + leftLeavesSum(t.right);
}
