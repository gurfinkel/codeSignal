bool isIncreasingDigitsSequence(int n) {
  int last = 10;
  while (n != 0) {
    if (n % 10 >= last) {
      return false;
    }
    last = n % 10;
    n /= 10;
  }
  return true;
}
