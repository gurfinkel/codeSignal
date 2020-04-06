//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
long digitTreeSum(Tree<int> t) {
    var nums = new List<long>();

    dfs(t, nums);

    return nums.Sum();
}

private void dfs(Tree<int> t, List<long> result, long number = 0) {
    if (null == t) {
        return;
    }

    number = 10 * number + t.value;

    if (null != t.left) {
        dfs(t.left, result, number);
    }

    if (null != t.right) {
        dfs(t.right, result, number);
    }

    if (null == t.left && null == t.right) {
        result.Add(number);
    }
}
