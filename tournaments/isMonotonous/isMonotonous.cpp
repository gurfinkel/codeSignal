bool isMonotonous(std::vector<int> sequence) {
  if (sequence.size() == 1) {
    return true;
  }
  int direction = sequence[1] - sequence[0];
  for (int i = 0; i < (int)sequence.size() - 1; i++) {
    if (direction * (sequence[i + 1] - sequence[i]) <= 0) {
      return false;
    }
  }
  return true;
}
