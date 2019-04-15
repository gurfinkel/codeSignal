int reverseBits(int n) {
  int res = 0;
  for (int i = 0; i < 16; i++) {
    res += res + n % 2;
    n /= 2;
  }
  return res;
}
