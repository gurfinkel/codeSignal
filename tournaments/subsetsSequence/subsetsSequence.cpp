bool subsetsSequence(std::vector<std::vector<int>> sets) {

  struct Helper {
    bool isSubset(std::vector<int>& setA, std::vector<int>& setB) {
      int j = 0;
      for (int i = 0; i < setB.size(); i++) {
        if (j < setA.size() && setA[j] == setB[i]) {
          j++;
        }
      }
      if (j == setA.size()) {
        return true;
      }
      else {
        return false;
      }
    }
  };

  Helper h;

  std::vector<int> supersets(sets.size(), 0);

  for (int i = 0; i < sets.size(); i++) {
      std::sort(sets[i].begin(), sets[i].end());
  }

  for (int i = 0; i < sets.size(); i++) {
    for (int j = i + 1; j < sets.size(); j++) {
      if (h.isSubset(sets[i], sets[j])) {
        supersets[i]++;
      }
      if (h.isSubset(sets[j], sets[i])) {
        supersets[j]++;
      }
    }
  }

  std::sort(supersets.begin(), supersets.end());

  for (int i = 0; i < sets.size(); i++) {
    if (supersets[i] < i) {
      return false;
    }
  }

  return true;
}
