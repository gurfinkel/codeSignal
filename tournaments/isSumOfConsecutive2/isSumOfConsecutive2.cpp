int isSumOfConsecutive2(int n) {
  int result = 0;
  for (int start = 1; start < n; start++) {
    int number = n,
        subtrahend = start;
    while (number > 0) {
      number -= subtrahend;
      subtrahend++;
    }
    if (!number) {
      result++;
    }
  }
  return result;
}
