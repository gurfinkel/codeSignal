int divisorsSubset(std::vector<int> subset, int n) {

  int res = 0;

  for (int i = 1; i <= n; i++) {
    bool correct = true;
    for (int j = 0; j < subset.size(); j++) {
      if (i % subset[j] != 0) {
        correct = false;
      }
    }
    if (correct) {
      res++;
    }
  }

  return res;
}
