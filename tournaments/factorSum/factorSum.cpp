int factorSum(int n) {

  int prevValue = 0,
      currentValue = 0,
      nextValue = n;

  do {
    int divisor = 2;
    currentValue = nextValue;
    prevValue = nextValue;
    nextValue = 0;
    while (divisor * divisor <= currentValue) {
      if (currentValue % divisor == 0) {
        currentValue /= divisor;
        nextValue += divisor;
      }
      else {
        divisor++;
      }
    }
    nextValue += currentValue;
  }
  while (nextValue != prevValue);

  return nextValue;
}
