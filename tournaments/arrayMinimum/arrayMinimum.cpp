int arrayMinimum(std::vector<int> inputArray) {

  int indexOfMinimum = 0;
  for (int i = 1; i < inputArray.size(); i++) {
    if (inputArray[i] < inputArray[indexOfMinimum]) {
      indexOfMinimum = i;
    }
  }
  return inputArray[indexOfMinimum];
}
