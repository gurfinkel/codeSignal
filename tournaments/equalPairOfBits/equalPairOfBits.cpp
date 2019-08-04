int equalPairOfBits(int n, int m) {
  return n + m + 1 & ~m - n;
}
