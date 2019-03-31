int zigzag(std::vector<int> a) {

  int best = 1;
  int left = 0;
  while (left < a.size()) {
    int right = left + 1;
    while (right < a.size()) {
      if (right == left + 1) {
        if (a[left] == a[right]) {
          break;
        }
      } else {
        if ((a[right - 1] - a[right - 2]) * (a[right - 1] - a[right]) <= 0) {
          break;
        }
      }
      right++;
    }
    best = std::max(best, right-left);
    left = right;
    if (left < a.size() && a[left - 1] != a[left]) {
      left--;
    }
  }

  return best;
}
