bool almostIncreasingSequence(std::vector<int> sequence) {
  bool found = false;
  for (size_t i = 1; i < sequence.size(); i++) {
    if (sequence[i] <= sequence[i - 1]) {
      if (found) {
        return false;
      }
      found = true;

      if (i == 1 || i + 1 == sequence.size()) {
        continue;
      }
      else if (sequence[i] > sequence[i - 2]) {
        sequence[i - 1] = sequence[i - 2];
      }
      else if (sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }
  return true;
}
