bool findEqual(std::vector<int> sequence) {

  for (size_t i = 0; i < sequence.size(); i++) {
    for (size_t j = i + 1; j < sequence.size(); j++) {
      if (sequence[i] == sequence[j]) {
        return true;
      }
    }
  }
  return false;
}
