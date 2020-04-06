//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
int[] largestValuesInTreeRows(Tree<int> t) {
    var result = new List<int>();

    dfs(t, result);

    return result.ToArray();
}

private void dfs(Tree<int> node, List<int> result, int depth = 0) {
    if (null == node) {
        return;
    }

    if (1 + depth > result.Count) {
        result.Add(node.value);
    } else {
        result[depth] = Math.Max(result[depth], node.value);
    }

    dfs(node.left, result, 1 + depth);
    dfs(node.right, result, 1 + depth);
}
