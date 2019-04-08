bool knightsAndKnaves(std::vector<int> answers) {

  int n = answers.size();
  std::vector<bool> isKnight(n);
  isKnight[0] = true;
  for (int i = 1; i < n; i++) {
    isKnight[i] = answers[0] >> i & 1;
  }
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (
          (isKnight[i] == isKnight[j]) ^
          (answers[i] >> j & 1)
      ) {
        return false;
      }
    }
  }

  return true;
}
