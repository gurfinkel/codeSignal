std::vector<int> maximalAllowableSubarrays(std::vector<int> inputArray,
  int maxSum) {

  std::vector<int> right(inputArray.size());
  int j = -1;
  int curSum = 0;
  for (int i = 0; i < inputArray.size(); i++) {
    if (i > 0) {
      curSum -= inputArray[i - 1];
    }
    while (j + 1 < inputArray.size() && curSum + inputArray[j + 1] <= maxSum) {
      curSum += inputArray[++j];
    }
    right[i] = j;
  }

  return right;
}
