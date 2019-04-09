std::vector<int> prefixFunctionNaive(std::string s) {

  std::vector<int> result;

  for (int i = 0; i < s.size(); i++) {
    result.push_back(0);
    for (result[i] = i; result[i] >= 0; result[i]--) {
      bool matches = true;
      for (int j = i - result[i] + 1; j <= i; j++) {
        if (s[j] != s[j - i + result[i] - 1]) {
          matches = false;
          break;
        }
      }
      if (matches) {
        break;
      }
    }
  }

  return result;
}
