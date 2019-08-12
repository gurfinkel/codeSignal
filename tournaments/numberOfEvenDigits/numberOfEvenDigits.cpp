int numberOfEvenDigits(int n) {
  int result = 0;
  while (n) {
    if (n % 2 == 0) {
      result++;
    }
    n /= 10;
  }
  return result;
}
