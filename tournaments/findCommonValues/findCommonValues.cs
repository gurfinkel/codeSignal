//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
int[] findCommonValues(Tree<int> t1, Tree<int> t2) {
    var inorder1 = new HashSet<int>();
    var inorder2 = new HashSet<int>();

    fillInorder(t1, inorder1);
    fillInorder(t2, inorder2);

    inorder1.IntersectWith(inorder2);

    return inorder1.ToArray();
}

private void fillInorder(Tree<int> node, HashSet<int> inorder) {
    if (null == node) {
        return;
    }

    fillInorder(node.left, inorder);
    inorder.Add(node.value);
    fillInorder(node.right, inorder);
}
