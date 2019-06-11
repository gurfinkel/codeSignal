std::vector<int> setIntersection(std::vector<int> a, std::vector<int> b) {

  std::sort(a.begin(), a.end());
  std::sort(b.begin(), b.end());
  std::vector<int> c = std::vector<int>();

  int pos_b = 0;
  for (int pos_a = 0; pos_a < a.size(); pos_a++) {
    while (pos_b < b.size() && b[pos_b] < a[pos_a]) {
      pos_b++;
    }
    if (a[pos_a] == b[pos_b]) {
      c.push_back(a[pos_a]);
      pos_b++;
    }
  }

  return c;
}
