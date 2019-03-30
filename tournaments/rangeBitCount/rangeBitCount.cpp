int rangeBitCount(int a, int b) {

  int ans = 0;
  for (int i = a; i <= b; i++) {
    int t = i;
    while (t != 0) {
      ans += t & 1;
      t >>= 1;
    }
  }

  return ans;
}
