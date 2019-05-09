bool isGeometricProgression(std::vector<int> sequence) {

  for (int i = 1; i < sequence.size(); i++) {
    if (sequence[i] * sequence[0] != sequence[i - 1] * sequence[1]) {
      return false;
    }
  }
  return true;
}
