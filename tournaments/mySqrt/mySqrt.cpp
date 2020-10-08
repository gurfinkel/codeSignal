int mySqrt(int n) {

  int left = 1, right = n + 1;
  while (left + 1 < right) {
    int middle = (right + left) / 2;
    if (middle * middle <= n) {
      left = middle;
    }
    else {
      right = middle;
    }
  }

  return left;
}
