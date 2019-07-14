int countLineColorings(int points, int colors) {
  int result = colors;
  for (int i = 1; i < points; i++) {
    result *= colors - 1;
  }
  return result;
}
