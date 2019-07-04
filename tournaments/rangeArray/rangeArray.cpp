std::vector<int> rangeArray(int l, int r, int step) {

  std::vector<int> result;
  while (l < r) {
    result.push_back(l);
    l += step;
  }
  return result;
}
