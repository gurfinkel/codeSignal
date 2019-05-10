int differentValuesInMultiplicationTable2(int n, int m) {
  std::vector<bool> found(n * m + 1, false);
  int result = 0;

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      found[i * j] = true;
    }
  }

  for (int value = 1; value <= n * m; value++) {
    if (found[value]) {
      result++;
    }
  }

  return result;
}
