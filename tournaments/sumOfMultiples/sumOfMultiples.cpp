int sumOfMultiples(int n, int k) {

  int result = 0;

  for (int i = 1; i <= n; i++) {
    if (i % k == 0) {
      result += i;
    }
  }
  return result;
}
