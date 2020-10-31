int axisAlignedCirclesBoundingBox(std::vector<int> x,
                                  std::vector<int> y,
                                  std::vector<int> r) {

  int minX = x[0] - r[0],
      maxX = x[0] + r[0],
      minY = y[0] - r[0],
      maxY = y[0] + r[0];

  for (int i = 1; i < x.size(); i++) {
    minX = std::min(x[i] - r[i], minX);
    maxX = std::max(x[i] + r[i], maxX);
    minY = std::min(y[i] - r[i], minY);
    maxY = std::max(y[i] + r[i], maxY);
  }

  return (maxX - minX) * (maxY - minY);
}
