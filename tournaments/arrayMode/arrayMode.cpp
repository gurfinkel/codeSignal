int arrayMode(std::vector<int> sequence) {
  std::vector<int> cnt;
  int answer = 0;

  for (int i = 0; i < 1000; i++) {
    cnt.push_back(0);
  }
  for (int i = 0; i < sequence.size(); i++) {
    cnt[sequence[i] - 1]++;
    if (cnt[sequence[i] - 1] > cnt[answer]) {
      answer = sequence[i] - 1;
    }
  }
  return answer + 1;
}
