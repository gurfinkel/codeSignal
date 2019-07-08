std::vector<int> nextPermutation(std::vector<int> permutation) {

  for (int i = permutation.size() - 2; i >= 0; i--) {
    if (permutation[i] < permutation[i + 1]) {
      int index = i + 1,
          t = permutation[i];
      for (int j = i + 1; j < permutation.size(); j++) {
        if (permutation[j] > t && permutation[j] < permutation[index]) {
          index = j;
        }
      }
      permutation[i] = permutation[index];
      permutation[index] = t;
      std::vector<int> suffix(permutation.begin() + i + 1, permutation.end());
      std::reverse(suffix.begin(), suffix.end());
      permutation.resize(i + 1);
      permutation.insert(permutation.end(), suffix.begin(), suffix.end());
      return permutation;
    }
  }

  std::sort(permutation.begin(), permutation.end());
  return permutation;
}
