int numberOfTriangles2(std::vector<int> sticks) {

  int ans = 0;
  for (int i = 0; i < (int)sticks.size() - 2; i++) {
    for (int j = i + 1; j < (int)sticks.size() - 1; j++) {
      int mx = sticks[i] + sticks[j];
      int l = j,
          r = (int)sticks.size();
      while (r - l > 1) {
        int m = (l + r) / 2;
        if (sticks[m] >= mx) {
          r = m;
        } else {
          l = m;
        }
      }
      ans += r - j - 1;
    }
  }

  return ans;
}
