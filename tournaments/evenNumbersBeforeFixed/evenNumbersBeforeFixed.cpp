int evenNumbersBeforeFixed(std::vector<int> sequence, int fixedElement) {

  int result = 0;

  for (int i = 0; i < sequence.size(); i++) {
    if (sequence[i] % 2 == 0 && sequence[i] != fixedElement) {
      result++;
    }
    if (sequence[i] == fixedElement) {
      return result;
    }
  }

  return -1;
}
