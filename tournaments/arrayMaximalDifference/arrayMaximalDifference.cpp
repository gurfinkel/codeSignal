int arrayMaximalDifference(std::vector<int> inputArray) {

  int answer = 0;
  for (int i = 0; i < inputArray.size(); i++) {
    for (int j = 0; j < inputArray.size(); j++) {
      if (inputArray[i] - inputArray[j] > answer) {
        answer = inputArray[i] - inputArray[j];
      }
    }
  }
  return answer;
}
