bool alphabetSubsequence(std::string s) {

  for (int i = 1; i < s.size(); i++) {
    if (s[i] < s[i - 1] + 1) {
      return false;
    }
  }
  return true;
}
