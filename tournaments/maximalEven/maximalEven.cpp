int maximalEven(std::vector<int> inputArray) {

  int answer = 0;
  for (int i = 0; i < inputArray.size(); i++) {
    if (inputArray[i] % 2 == 0 && inputArray[i] > answer) {
      answer = inputArray[i];
    }
  }
  return answer;
}
