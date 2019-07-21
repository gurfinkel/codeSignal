int gcdNaive(int a, int b) {

  int gcd = 1;
  for (int divisor = 2; divisor <= std::min(a, b); ++divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      gcd = divisor;
    }
  }

  return gcd;
}
