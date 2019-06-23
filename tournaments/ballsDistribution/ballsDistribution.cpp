int ballsDistribution(int colors, int ballsPerColor, int boxSize) {

  int currentBox = 0;
  int capacity = boxSize;
  int result = 0;

  for (int i = 0; i < colors; i++) {
    int startBox = currentBox;
    for (int j = 0; j < ballsPerColor; j++) {
      capacity--;
      if (capacity == 0) {
        currentBox++;
        capacity = boxSize;
      }
    }
    if ((startBox < currentBox && capacity < boxSize) ||
         startBox + 1 < currentBox) {
      result++;
    }
  }

  return result;
}
