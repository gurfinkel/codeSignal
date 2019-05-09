typedef std::vector<std::string> Array2D;

Array2D addBorder(Array2D picture) {

  Array2D answer(1, "");

  for (int i = 0; i < picture[0].size() + 2; i++) {
    answer[0] += "*";
  }

  for (int i = 0; i < picture.size(); i++) {
    answer.push_back("*");
    for (int j = 0; j < picture[0].size(); j++) {
      answer[i + 1] += picture[i][j];
    }
    answer[i + 1] += "*";
  }

  answer.push_back(answer[0]);

  return answer;
}
