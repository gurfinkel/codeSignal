int rectanglesIntersection(std::vector<int> a, std::vector<int> b,
                           std::vector<int> c, std::vector<int> d) {

  std::vector<int> intersection(2);

  for (int i = 0; i < 2; i++) {
    if (a[i] > b[i]) {
      std::swap(a[i], b[i]);
    }
    if (c[i] > d[i]) {
      std::swap(c[i], d[i]);
    }
    if (b[i] < c[i] || d[i] < a[i]) {
      return 0;
    }
    intersection[i] = std::min(b[i], d[i]) - std::max(a[i], c[i]);
  }

  return intersection[0] * intersection[1];
}
