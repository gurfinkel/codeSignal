bool sameDigitNumber(int n) {
  int digit = n % 10;
  while (n != 0) {
    if (n % 10 != digit) {
      return false;
    }
    n /= 10;
  }
  return true;
}
