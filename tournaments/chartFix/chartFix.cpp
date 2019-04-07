int chartFix(std::vector<int> chart) {
  std::vector<int> toRemove;
  for (int i = 0; i < chart.size(); i++) {
    int cur = i;
    for (int j = 0; j < i; j++) {
      if (chart[j] < chart[i]) {
        cur = std::min(cur, toRemove[j] + i - j - 1);
      }
    }
    toRemove.push_back(cur);
  }
  int res = INT_MAX;
  for (int i = 0; i < toRemove.size(); i++) {
    res = std::min(res, toRemove[toRemove.size() - i - 1] + i);
  }
  return res;
}
