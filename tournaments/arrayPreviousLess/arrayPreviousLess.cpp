std::vector<int> arrayPreviousLess(std::vector<int> items) {

  std::vector<int> result;
  for (int i = 0; i < items.size(); i++) {
    int substitute = -1;
    for (int j = 0; j < i; j++) {
      if (items[j] < items[i]) {
        substitute = items[j];
      }
    }
    result.push_back(substitute);
  }

  return result;
}
