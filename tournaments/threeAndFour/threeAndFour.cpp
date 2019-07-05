std::vector<int> threeAndFour(int n) {
  std::vector<int> result;
  for (int counter = 0; counter < n; counter++) {
    if (counter % 3 == 0 && counter % 4 == 0)
      result.push_back(counter);
  }
  return result;
}
