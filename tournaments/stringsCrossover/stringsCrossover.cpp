int stringsCrossover(std::vector<std::string> inputArray,
                     std::string result) {

  int answer = 0;

  for (int i = 0; i < inputArray.size(); i++) {
    for (int j = i + 1; j < inputArray.size(); j++) {
      bool correct = true;
      for (int k = 0; k < result.size(); k++) {
        if (result[k] != inputArray[i][k]
            && result[k] != inputArray[j][k]) {
          correct = false;
          break;
        }
      }
      if (correct) {
        answer++;
      }
    }
  }
  return answer;
}
