int sqr(int value) {
  return value * value;
}

bool insideCircle(std::vector<int> point, std::vector<int> center, int radius) {

  if (sqr(point[0] - center[0]) + sqr(point[1] - center[1]) <= sqr(radius)) {
    return true;
  }
  return false;
}
