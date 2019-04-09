int longestSequence(std::vector<int> a) {

  int best = 1;
  for (int i = 0; i < a.size(); i++) {
    for (int j = i + 1; j < a.size(); j++) {
      int diff = a[j] - a[i];
      if (diff == 0) {
        continue;
      }
      int cur = 1;
      int last = a[i];
      for (int k = j; k < a.size(); k++) {
        if (a[k] - last == diff) {
          cur++;
          last = a[k];
        }
      }
      if (cur > best) {
        best = cur;
      }
    }
  }

  return best;
}
