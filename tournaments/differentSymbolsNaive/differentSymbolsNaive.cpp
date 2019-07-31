int differentSymbolsNaive(std::string s) {

  int result = 0;

  for (int i = 0; i < 26; i++) {
    bool found = false;
    for (int j = 0; j < s.size(); j++) {
      if (s[j] == 'a' + i) {
        found = true;
        break;
      }
    }
    if (found) {
      result++;
    }
  }
  return result;
}
