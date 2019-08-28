int largestNumber(int n) {

  int res = 0;

  for (int i = 0; i < n; i++) {
    res = res * 10 + 9;
  }

  return res;
}
