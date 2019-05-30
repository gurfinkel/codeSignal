int largestFullBinaryTree(std::vector<int> parent) {

  struct Graph {
    std::vector<std::vector<int>> edges;
    int maxBinTree;

    Graph(std::vector<int> const & parent) {
      maxBinTree = 1;
      edges = std::vector<std::vector<int>>(parent.size());
      for (int i = 1; i < parent.size(); i++) {
        edges[parent[i]].push_back(i);
      }
    }

    int dfs(int v) {
      int firstMax = -1;
      int secondMax = -1;
      for (int u : edges[v]) {
        int curMax = dfs(u);
        if (curMax > firstMax) {
          secondMax = firstMax;
          firstMax = curMax;
        } else if (curMax > secondMax) {
          secondMax = curMax;
        }
      }
      if (secondMax == -1) {
        return 1;
      }
      int result = firstMax + secondMax + 1;
      if (result > maxBinTree) {
        maxBinTree = result;
      }
      return result;
    }
  };

  Graph g(parent);
  g.dfs(0);
  return g.maxBinTree;
}
