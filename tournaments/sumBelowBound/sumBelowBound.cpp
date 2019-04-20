int sumBelowBound(int bound) {

  int left = 0,
      right = bound + 1;
  while (right - left > 1) {
    int middle = (right + left) / 2;
    if (middle * (middle + 1) / 2 <= bound) {
      left = middle;
    } else {
      right = middle;
    }
  }

  return left;
}
