int arrayMaximalAdjacentDifference(std::vector<int> inputArray) {

  int answer = 0;
  for (int i = 1; i < inputArray.size(); i++) {
    if (std::abs(inputArray[i] - inputArray[i - 1]) > answer) {
      answer = std::abs(inputArray[i] - inputArray[i - 1]);
    }
  }
  return answer;
}
