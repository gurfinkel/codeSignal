bool isLuckyNumber(int n) {
  while (n > 0) {
    int tmpDigit = n % 10;
    if (tmpDigit != 4 && tmpDigit != 7) {
      return false;
    }
    n = n / 10;
  }
  return true;
}
