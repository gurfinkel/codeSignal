int factorialsProductTrailingZeros(int l, int r) {
  int result = 0,
      last = 0;
  for (int i = 1; i <= r; i++) {
    int number = i;
    while (number % 5 == 0) {
      number /= 5;
      last++;
    }
    if (i >= l) {
      result += last;
    }
  }
  return result;
}
