int josephusProblem(int n, int k) {
  std::vector<int> removed;
  int currentPerson = 0;

  for (int i = 0; i < n; i++) {
    removed.push_back(false);
  }

  for (int i = 1; i < n; i++) {
    int skipped = 0;
    while (skipped < k - 1) {
      if (!removed[currentPerson]) {
        skipped++;
      }
      currentPerson = (currentPerson + 1) % n;
    }
    while (removed[currentPerson]) {
      currentPerson = (currentPerson + 1) % n;
    }
    removed[currentPerson] = true;
  }

  for (int i = 0; i < n; i++) {
    if (!removed[i]) {
      return i + 1;
    }
  }
}
