int countSumOfTwoRepresentations2(int n, int l, int r) {
  int result = 0;

  for (int a = l; a <= r; a++) {
    int b = n - a;
    if (a <= b && b <= r) {
      result++;
    }
  }

  return result;
}
