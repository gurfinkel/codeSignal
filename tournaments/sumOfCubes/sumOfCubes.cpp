int sumOfCubes(int n) {
  int result = 0;
  for (int i = 1; i <= n; i++) {
    result += i * i * i;
  }
  return result;
}
