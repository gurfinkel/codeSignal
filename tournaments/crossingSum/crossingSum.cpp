int crossingSum(std::vector<std::vector<int>> matrix,
                int row, int column) {

  int result = 0;
  for (int i = 0; i < matrix.size(); i++) {
    result += matrix[i][column];
  }
  for (int i = 0; i < matrix[0].size(); i++) {
    result += matrix[row][i];
  }
  result -= matrix[row][column];

  return result;
}
