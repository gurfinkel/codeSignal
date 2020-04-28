bool isSkewSymmetricMatrix(std::vector<std::vector<int>> matrix) {
  for (int i = 0; i < matrix.size(); i++) {
    for (int j = 0; j < matrix.size(); j++) {
      if (matrix[i][j] != -matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}
