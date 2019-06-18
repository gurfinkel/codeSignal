int numberOfTriangles(std::vector<int> sticks) {
  int res = 0;
  for (int i = 0; i < sticks.size(); i++) {
    int k = i + 2;
    for (int j = i + 1; j < sticks.size(); j++) {
      while (k < sticks.size() && sticks[k] < sticks[i] + sticks[j]) {
        k++;
      }
      res += k - j - 1;
    }
  }
  return res;
}
