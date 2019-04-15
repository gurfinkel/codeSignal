int nearestRoundNumber(int value) {

  while (value % 10) {
    value++;
  }
  return value;
}
