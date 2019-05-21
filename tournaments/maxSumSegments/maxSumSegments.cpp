std::vector<int> maxSumSegments(std::vector<int> inputArray) {

  std::vector<int> result;
  for (int i = 1; i <= inputArray.size(); i++) {
    int sum = 0,
        mxSum = 0,
        index = -1;
    for (int j = 0; j < inputArray.size(); j++) {
      sum += inputArray[j];
      if (j >= i) {
        sum -= inputArray[j - i];
      }
      if (j >= i - 1 && (index == -1 || sum > mxSum)) {
        mxSum = sum;
        index = j - i + 1;
      }
    }
    result.push_back(index);
  }
  return result;
}
