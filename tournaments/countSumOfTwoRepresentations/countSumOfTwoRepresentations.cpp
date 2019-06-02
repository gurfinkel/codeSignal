int countSumOfTwoRepresentations(int n, int l, int r) {
  int result = 0;

  for (int a = l; a <= r; a++) {
    for (int b = a; b <= r; b++) {
      if (a + b == n) {
        result++;
      }
    }
  }

  return result;
}
