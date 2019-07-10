int candles(int candlesNumber, int makeNew) {
  int burned = 0;
  int leftovers = 0;
  while (candlesNumber > 0) {
    burned += candlesNumber;
    leftovers += candlesNumber;
    candlesNumber = leftovers / makeNew;
    leftovers %= makeNew;
  }
  return burned;
}
