std::vector<int> sortedIndices(std::vector<int> a) {
  std::vector<int> indices;
  for (int i = 0; i < a.size(); i++) {
    indices.push_back(i);
  }
  for (int i = 0; i < a.size() - 1; i++) {
    for (int j = 0; j < a.size() - i - 1; j++) {
      if (a[indices[j]] > a[indices[j + 1]]) {
        int tmp = indices[j + 1];
        indices[j + 1] = indices[j];
        indices[j] = tmp;
      }
    }
  }
  return indices;
}
