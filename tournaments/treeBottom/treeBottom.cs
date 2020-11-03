int[] treeBottom(string tree) {
    var list = new List<int>();
    int maxDepth = 0, depth = 0;
    var nodeRegex = new Regex("(\\d+) \\(\\) \\(\\)");
    for (int i = 0; i < tree.Length; i++)
    {
        if (tree[i] == '(') depth++;
        else if (tree[i] == ')') depth--;
        else if (char.IsDigit(tree[i]))
        {
            var node = nodeRegex.Match(tree.Substring(i, tree.Substring(i).TakeWhile(char.IsDigit).Count() + 6));
            if (!node.Success) continue;
            i += node.Length - 1;
            if (maxDepth > depth) continue;
            if (depth > maxDepth) list.Clear();
            list.Add(int.Parse(node.Groups[1].Value));
            maxDepth = depth;
        }
    }

    return list.ToArray();
}
