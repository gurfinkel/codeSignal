std::vector<int> swapArrayHalves(std::vector<int> inputArray) {

  for (int i = 0; i < inputArray.size() / 2; i++) {
    int tmp = inputArray[i];
    inputArray[i] = inputArray[i + inputArray.size() / 2];
    inputArray[i + inputArray.size() / 2] = tmp;
  }
  return inputArray;
}
