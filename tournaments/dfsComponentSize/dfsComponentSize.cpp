int dfsComponentSize(std::vector<std::vector<bool>> matrix, int vertex) {

  struct Helper {

    int componentSize;
    std::vector<std::vector<bool>> matrix;
    std::vector<bool> visited;

    void dfs(int currentVertex) {
      visited[currentVertex] = true;
      componentSize++;
      for (int nextVertex = 0; nextVertex < matrix.size(); nextVertex++) {
        if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
          dfs(nextVertex);
        }
      }
    }

  };

  std::vector<bool> visited;

  for (int i = 0; i < matrix.size(); i++) {
    visited.push_back(false);
  }

  Helper h;
  h.componentSize = 0;
  h.matrix = matrix;
  h.visited = visited;

  h.dfs(vertex);

  return h.componentSize;
}
