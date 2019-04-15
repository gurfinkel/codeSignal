std::vector<int> splitByValue(int k, std::vector<int> elements) {
  std::vector<int> result;
  for (int i = 0; i < elements.size(); i++) {
    if (elements[i] < k) {
      result.push_back(elements[i]);
    }
  }
  for (int i = 0; i < elements.size(); i++) {
    if (elements[i] >= k) {
      result.push_back(elements[i]);
    }
  }
  return result;
}
