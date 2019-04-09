bool isSumOfConsecutive(int n) {
  for (int start = 1; start < n; start++) {
    int number = n,
        subtrahend = start;
    while (number > 0) {
      number -= subtrahend;
      subtrahend++;
    }
    if (!number) {
      return true;
    }
  }
  return false;
}
