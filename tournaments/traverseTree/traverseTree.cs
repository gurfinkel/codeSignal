//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
int[] traverseTree(Tree<int> t) {
    var result = new List<int>();
    var bfs = new Queue<Tree<int>>();

    bfs.Enqueue(t);

    while (0 < bfs.Count) {
        var curr = bfs.Dequeue();

        if (null != curr) {
            result.Add(curr.value);
            bfs.Enqueue(curr.left);
            bfs.Enqueue(curr.right);
        }
    }

    return result.ToArray();
}
