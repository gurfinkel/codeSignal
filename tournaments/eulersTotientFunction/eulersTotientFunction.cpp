int eulersTotientFunction(int n) {
  int divisor = 2,
      result = n;

  while (divisor * divisor <= n) {
    if (n % divisor == 0) {
      while (n % divisor == 0) {
        n /= divisor;
      }
      result -= result / divisor;
    }
    divisor++;
  }
  if (n > 1) {
    result -= result / n;
  }

  return result;
}
