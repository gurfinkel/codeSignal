int arrayChange(std::vector<int> inputArray) {

  int result = 0;

  for (int i = 1; i < inputArray.size(); i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      result += inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] = inputArray[i - 1] + 1;
    }
  }
  return result;
}
