int lrSegmentNumber(int l, int r) {
  int result = 0;
  while (l <= r) {
    result = result * 10 + l;
    l++;
  }
  return result;
}
