int maxDivisor(int left, int right, int divisor) {

  for (int i = right; i >= left; i--) {
    if (i % divisor == 0) {
      return i;
    }
  }
  return -1;
}
