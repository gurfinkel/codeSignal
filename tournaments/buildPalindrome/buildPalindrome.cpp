std::string buildPalindrome(std::string st) {
  bool canConvert;
  for (int i = st.size(); ; i++) {
    canConvert = true;
    for (int j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < st.size() && st[j] != st[i - j - 1]) {
        canConvert = false;
        break;
      }
    }
    if (canConvert) {
      for (int j = st.size(); j < i; j++) {
        st += st[i - j - 1];
      }
      return st;
    }
  }
}
