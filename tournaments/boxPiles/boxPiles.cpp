int boxPiles(std::vector<int> a) {

  std::sort(a.begin(), a.end());
  std::vector<bool> used(a.size(), false);
  int usedNum = 0;
  int answer = 0;
  while (usedNum < (int)used.size()) {
    int height = 0;
    for (int i = 0; i < (int)a.size(); i++) {
      if (!used[i] && a[i] >= height) {
        height++;
        used[i] = true;
        usedNum++;
      }
    }
    answer++;
  }

  return answer;
}
