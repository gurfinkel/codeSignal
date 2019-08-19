typedef std::vector<std::vector<bool>> matrix_t;

std::vector<int> bfsDistancesUnweightedGraph(matrix_t matrix,
                                             int startVertex) {

  bool visited[matrix.size()];
  std::fill_n(visited, matrix.size(), false);
  std::queue<int> q;
  std::vector<int> distance(matrix.size());

  visited[startVertex] = true;
  q.push(startVertex);
  while (q.size() != 0) {
    int currentVertex = q.front();
    q.pop();
    visited[currentVertex] = true;
    for (int nextVertex = 0; nextVertex < matrix.size(); ++nextVertex) {
      if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
        visited[nextVertex] = true;
        distance[nextVertex] = distance[currentVertex] + 1;
        q.push(nextVertex);
      }
    }
  }

  return distance;
}
