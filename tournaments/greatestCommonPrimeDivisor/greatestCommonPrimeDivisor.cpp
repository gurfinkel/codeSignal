int greatestCommonPrimeDivisor(int a, int b) {

  int gcd = -1;
  for (int divisor = 2; a > 1 && b > 1; divisor++) {
    if (0 == a % divisor && 0 == b % divisor) {
      gcd = divisor;
    }
    while (a % divisor == 0) {
      a /= divisor;
    }
    while (b % divisor == 0) {
      b /= divisor;
    }
  }

  return gcd;
}
