//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
bool isBST(Tree<int> t) {
    var inOrder = new List<int>();

    fillInOrder(t, inOrder);

    for (int i = 1; inOrder.Count > i; ++i) {
        if (inOrder[i - 1] >= inOrder[i]) {
            return false;
        }
    }

    return true;
}

private void fillInOrder(Tree<int> node, List<int> inOrder) {
    if (null == node) {
        return;
    }

    fillInOrder(node.left, inOrder);
    inOrder.Add(node.value);
    fillInOrder(node.right, inOrder);
}
