int factorialTrailingZeros(int n) {
  int result = 0;
  for (int i = 5; i <= n; i += 5) {
    int number = i;
    while (number % 5 == 0) {
      number /= 5;
      result++;
    }
  }
  return result;
}
