int minMaxDifference(std::vector<int> inputArray) {

  int indexOfMinimum = 0,
      indexOfMaximum = 0;

  for (int i = 1; i < inputArray.size(); i++) {
    if (inputArray[i] < inputArray[indexOfMinimum]) {
      indexOfMinimum = i;
    }
    if (inputArray[i] > inputArray[indexOfMaximum]) {
      indexOfMaximum = i;
    }
  }
  return inputArray[indexOfMaximum] - inputArray[indexOfMinimum];
}
