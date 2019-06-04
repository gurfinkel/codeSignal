int arrayPacking(std::vector<int> a) {

  int res = 0;
  for (int i = 0; i < (int) a.size(); i++) {
    res |= a[i] << (8 * i);
  }

  return res;
}
