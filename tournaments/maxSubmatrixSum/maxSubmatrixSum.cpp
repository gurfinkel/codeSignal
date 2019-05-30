int maxSubmatrixSum(std::vector<std::vector<int>> matrix,
                    int n, int m) {

  int result = 0;
  for (int i = 0; i + n <= matrix.size(); i++) {
    for (int j = 0; j + m <= matrix[0].size(); j++) {
      int sum = 0;
      for (int x = 0; x < n; x++) {
        for (int y = 0; y < m; y++) {
          sum += matrix[i + x][j + y];
        }
      }
      if (i == 0 && j == 0 || sum > result) {
        result = sum;
      }
    }
  }

  return result;
}
