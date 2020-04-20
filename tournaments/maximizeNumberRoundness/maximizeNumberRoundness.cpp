int maximizeNumberRoundness(int n) {
  int tmp = n;
  int zeros = 0;
  while (tmp) {
    if (tmp % 10 == 0) {
      zeros++;
    }
    tmp /= 10;
  }
  int result = zeros;
  for (int i = 0; i < zeros; i++) {
    if (n % 10 == 0) {
      result--;
    }
    n /= 10;
  }
  return result;
}
