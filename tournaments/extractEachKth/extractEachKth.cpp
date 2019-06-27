std::vector<int> extractEachKth(std::vector<int> inputArray, int k) {

  std::vector<int> result;
  for (int i = 0; i < inputArray.size(); i++) {
    if ((i + 1) % k != 0) {
      result.push_back(inputArray[i]);
    }
  }
  return result;
}
