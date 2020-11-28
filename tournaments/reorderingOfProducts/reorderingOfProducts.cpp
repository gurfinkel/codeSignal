int reorderingOfProducts(std::vector<int> boundaries, int y) {
  const int INF = INT_MAX;
  boundaries.insert(boundaries.begin(), -INF);
  int l = 0;
  int r = boundaries.size() - 1;
  while (l + 1 < r) {
    int mid = (l + r) / 2;
    if (y > (boundaries[mid] + boundaries[mid + 1]) / 2) {
      l = mid;
    }
    else {
      r = mid;
    }
  }
  return l;
}
