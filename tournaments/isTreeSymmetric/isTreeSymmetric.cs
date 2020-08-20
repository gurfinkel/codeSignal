//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
bool isTreeSymmetric(Tree<int> t) {
    return isMirror(t, t);
}

bool isMirror(Tree<int> a, Tree<int> b) {
    if (null == a && null == b) {
        return true;
    }

    if (null != a && null != b && a.value == b.value) {
        return isMirror(a.left, b.right) && isMirror(a.right, b.left);
    }

    return false;
}
