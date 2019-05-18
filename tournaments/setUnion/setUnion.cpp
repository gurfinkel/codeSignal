std::vector<int> setUnion(std::vector<int> a, std::vector<int> b) {

  int pos_b = 0;

  std::sort(a.begin(), a.end());
  std::sort(b.begin(), b.end());
  std::vector<int> c;

  for (int pos_a = 0; pos_a < a.size(); pos_a++) {
    while (pos_b < b.size() && b[pos_b] < a[pos_a]) {
      c.push_back(b[pos_b]);
      pos_b++;
    }
    c.push_back(a[pos_a]);
    if (a[pos_a] == b[pos_b]) {
      pos_b++;
    }
  }
  while (pos_b < b.size()) {
    c.push_back(b[pos_b]);
    pos_b++;
  }

  return c;
}
