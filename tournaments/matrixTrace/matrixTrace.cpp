int matrixTrace(std::vector<std::vector<int>> matrix) {

  int result = 0;
  for (int i = 0; i < matrix.size(); i++) {
    result += matrix[i][i];
  }
  return result;
}
