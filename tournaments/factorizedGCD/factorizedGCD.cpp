int factorizedGCD(std::vector<int> a, std::vector<int> b) {
  int j = 0,
      result = 1;
  for (int i = 0; i < a.size(); i++) {
    while (j < b.size() && a[i] > b[j]) {
      j++;
    }
    if (j < b.size() && a[i] == b[j]) {
      result *= a[i];
      j++;
    }
  }
  return result;
}
