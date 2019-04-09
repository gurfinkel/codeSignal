typedef std::vector<std::string> Array2D;

Array2D sortByLength(Array2D inputArray) {
  std::vector<int> initIndex(inputArray.size());
  for (size_t i = 0; i < inputArray.size(); i++) {
    initIndex[i] = i;
  }
  for (size_t i = 0; i < inputArray.size(); i++) {
    int minIndex = i;
    std::string tmp = inputArray[i];
    for (size_t j = i + 1; j < inputArray.size(); j++) {
      if (inputArray[j].size() < inputArray[minIndex].size() || inputArray[j].size() == inputArray[minIndex].size() && initIndex[j] < initIndex[minIndex]) {
        minIndex = j;
      }
    }
    inputArray[i] = inputArray[minIndex];
    inputArray[minIndex] = tmp;
    int tmp2 = initIndex[minIndex];
    initIndex[minIndex] = initIndex[i];
    initIndex[i] = tmp2;
  }

  return inputArray;
}
