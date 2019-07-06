bool pairOfShoes(std::vector<std::vector<int>> shoes) {
  std::vector<int> leftShoes, rightShoes;
  for (size_t i = 0; i < shoes.size(); i++) {
    if (shoes[i][0] == 0) {
      leftShoes.push_back(shoes[i][1]);
    } else {
      rightShoes.push_back(shoes[i][1]);
    }
  }
  std::sort(leftShoes.begin(), leftShoes.end());
  std::sort(rightShoes.begin(), rightShoes.end());
  if (leftShoes.size() != rightShoes.size()) {
    return false;
  }
  for (size_t i = 0; i < leftShoes.size(); i++) {
    if (leftShoes[i] != rightShoes[i]) {
      return false;
    }
  }
  return true;
}
