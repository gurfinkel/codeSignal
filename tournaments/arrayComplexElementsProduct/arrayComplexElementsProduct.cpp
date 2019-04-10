std::vector<int> arrayComplexElementsProduct(std::vector<int> real,
                                              std::vector<int> imag) {

  std::vector<int> answer;
  answer.push_back(real[0]);
  answer.push_back(imag[0]);
  for (int i = 1; i < real.size(); i++) {
    int tmp = answer[0] * real[i] - answer[1] * imag[i];
    answer[1] = answer[1] * real[i] + answer[0] * imag[i];
    answer[0] = tmp;
  }
  return answer;
}
