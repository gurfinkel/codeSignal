int differentRightmostBit(int n, int m) {
  return -~((~(n^m))^((~(n^m))+1))/2;
}
