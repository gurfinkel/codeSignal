//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
int closestInTree(Tree<int> t, int n) {
    int result = t.value;

    for (int val; null != t; ) {
        val = t.value;
        result = Math.Abs(n-val) < Math.Abs(n-result) ? val : result;
        t = n < t.value ? t.left : t.right;
    }

    return result;
}
