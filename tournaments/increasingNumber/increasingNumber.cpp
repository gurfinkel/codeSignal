int increasingNumber(int x, int n) {
  for (int i = 1; i <= n; i++) {
    while (x % i) {
      x += 1;
    }
  }
  return x;
}
