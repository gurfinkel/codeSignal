bool noAdjacentBits(int a) {

  int lastBit = 0,
      idx = 0;
  while ((1 << idx) <= a) {
    int curBit = (a >> idx) & 1;
    if (lastBit && curBit) {
      return false;
    }
    lastBit = curBit;
    idx++;
  }

  return true;
}
