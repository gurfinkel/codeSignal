int countInversionsNaive(std::vector<int> inputArray) {

  int result = 0;

  for (int i = 0; i < inputArray.size(); i++) {
    for (int j = i + 1; j < inputArray.size(); j++) {
      if (inputArray[i] > inputArray[j]) {
        result++;
      }
    }
  }
  return result;
}
