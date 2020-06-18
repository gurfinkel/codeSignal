int commonPoints(int l1, int r1, int l2, int r2) {
  int result = std::min(r1, r2) - std::max(l1, l2) - 1;
  if (result < 0) {
    result = 0;
  }
  return result;
}
