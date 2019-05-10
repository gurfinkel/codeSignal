std::string longestString(std::vector<std::string> inputArray) {

  std::string answer = inputArray[0];
  for (int i = 1; i < inputArray.size(); i++) {
    if (inputArray[i].size() > answer.size()) {
      answer = inputArray[i];
    }
  }
  return answer;
}
