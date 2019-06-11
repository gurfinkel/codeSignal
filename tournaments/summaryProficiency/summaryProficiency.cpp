int summaryProficiency(std::vector<int> a, int n, int m) {

  int result = 0;
  for (int i = 0; n > 0; i++) {
    if (a[i] >= m) {
      result += a[i];
      n--;
    }
  }

  return result;
}
