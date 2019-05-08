int numberOfSolutions(int n) {

  int result = 0;
  for (int a = n + 1; a < 2 * n; a++) {
    if ((a * n) % (a - n) == 0) {
      result++;
    }
  }

  return result * 2 + 1;
}
