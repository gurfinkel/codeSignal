int bfsComponentSize(std::vector<std::vector<bool>> matrix) {

  std::vector<bool> visited(matrix.size(), false);
  std::queue<int> Queue;
  int componentSize = 0;

  visited[1] = true;
  Queue.push(1);

  while (Queue.size() > 0) {
    int currentVertex = Queue.front();
    Queue.pop();
    visited[currentVertex] = true;
    componentSize++;
    for (int nextVertex = 0; nextVertex < matrix.size(); nextVertex++) {
      if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
        visited[nextVertex] = true;
        Queue.push(nextVertex);
      }
    }
  }

  return componentSize;
}
