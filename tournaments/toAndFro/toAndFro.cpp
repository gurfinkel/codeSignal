int toAndFro(int a, int b, int t) {

  int len = std::abs(b - a);
  t %= (2 * len);
  if (t <= len) {
    return a + (b - a) / std::abs(b - a) * t;
  }
  else {
    t -= len;
    return b - (b - a) / std::abs(b - a) * t;
  }
}
