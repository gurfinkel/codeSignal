typedef std::vector<std::vector<int>> matrix;

matrix segmentSumsMatrix2(std::vector<int> inputArray) {

  std::vector<int> line(inputArray.size(), 0);
  matrix answer(inputArray.size(), line);

  for (int i = 0; i < inputArray.size(); i++) {
    answer[i][i] = inputArray[i];
    for (int j = i + 1; j < inputArray.size(); j++) {
      answer[i][j] = answer[i][j - 1] + inputArray[j];
    }
  }

  for (int i = 0; i < inputArray.size(); i++) {
    for (int j = i + 1; j < inputArray.size(); j++) {
      answer[j][i] = answer[i][j];
    }
  }

  return answer;
}
