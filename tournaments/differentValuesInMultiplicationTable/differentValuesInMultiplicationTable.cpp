int differentValuesInMultiplicationTable(int n, int m) {
  int result = 0;
  for (int value = 1; value <= n * m; value++) {
    for (int i = 1; i <= std::min(n, m); i++) {
      if (std::max(n, m) >= value / i && value % i == 0) {
        result++;
        break;
      }
    }
  }
  return result;
}
