int divisorsPairs(std::vector<int> sequence) {

  int result = 0;

  for (int i = 0; i < sequence.size(); i++) {
    for (int j = i + 1; j < sequence.size(); j++) {
      if (sequence[i] % sequence[j] == 0 || sequence[j] % sequence[i] == 0) {
        result++;
      }
    }
  }

  return result;
}
