//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
    if (!t) {
        return false;
    }
    
    if (s === t.value && !t.left && !t.right) {
        return true;
    }
    
    return hasPathWithGivenSum(t.left, s - t.value) || hasPathWithGivenSum(t.right, s - t.value);
}
