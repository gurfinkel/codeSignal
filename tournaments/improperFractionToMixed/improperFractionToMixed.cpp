std::vector<int> improperFractionToMixed(std::vector<int> a) {

  std::vector<int> b(3);
  b[0] = a[0] / a[1], b[1] = 0, b[2] = 0;
  b[1] = a[0] - a[1] * b[0];
  b[2] = a[1];

  return b;
}
