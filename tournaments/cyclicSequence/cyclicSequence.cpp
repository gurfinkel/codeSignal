bool cyclicSequence(std::vector<int> sequence) {

  bool found = false;
  int st = -1;
  for (size_t i = 1; i < sequence.size(); i++) {
    if (sequence[i - 1] == sequence[i]) {
      return false;
    }
    if (sequence[i - 1] > sequence[i]) {
      if (found) {
        return false;
      }
      found = true;
      st = static_cast<int>(i);
    }
  }
  return st != -1 && sequence[0] > sequence.back() || st == -1;
}
