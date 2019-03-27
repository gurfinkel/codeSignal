typedef std::vector<std::vector<int>> matrix;

matrix segmentSumsMatrix1(std::vector<int> inputArray) {

  std::vector<int> line(inputArray.size(), 0);
  matrix answer(inputArray.size(), line);

  for (int i = 0; i < inputArray.size(); i++) {
    for (int j = i; j >= 0; j--) {
      for (int k = i; k < inputArray.size(); k++) {
        answer[j][k] += inputArray[i];
        answer[k][j] += inputArray[i];
      }
    }
    answer[i][i] -= inputArray[i];
  }

  return answer;
}
