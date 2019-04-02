std::vector<int> prefixSums(std::vector<int> a) {

  std::vector<int> b(1, a[0]);
  for (int i = 1; i < a.size(); i++) {
    b.push_back(b[i - 1] + a[i]);
  }

  return b;
}
