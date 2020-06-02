//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
int leftLeavesSum(Tree<int> t) {
    var result = 0;

    dfs(t, ref result);

    return result;
}

private void dfs(Tree<int> node, ref int sum, bool isLeft = false) {
    if (null == node) {
        return;
    }

    if (isLeft && null == node.left && null == node.right) {
        sum += node.value;
    }

    dfs(node.left, ref sum, true);
    dfs(node.right, ref sum);
}
