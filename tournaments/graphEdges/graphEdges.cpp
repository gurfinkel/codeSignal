int graphEdges(std::vector<std::vector<bool>> matrix) {

  int edges = 0;

  for (int i = 0; i < matrix.size(); i++) {
    for (int j = i + 1; j < matrix[0].size(); j++) {
      if (matrix[i][j]) {
        edges++;
      }
    }
  }

  return edges;
}
