int minimalMultiple(int divisor, int lowerBound) {

  if (lowerBound % divisor == 0) {
    return lowerBound;
  }
  return divisor * (lowerBound / divisor + 1);
}
