int largestDistance(std::vector<int> a) {

  int mx[2] = {a[0], a[1]};
  int mn[2] = {a[0], a[1]};
  for (int i = 0; i < a.size(); i++) {
    int k = i % 2;
    if (a[i] > mx[k]) {
      mx[k] = a[i];
    } else if (a[i] < mn[k]) {
      mn[k] = a[i];
    }
  }
  return std::max(mx[0] - mn[0], mx[1] - mn[1]);
}
