std::string removeAdjacent(std::string s) {

  if (s == "") {
    return "";
  }

  std::string ans;
  ans += s[0];
  for (int i = 1; i < s.size(); i++) {
    if (s[i] != s[i - 1]) {
      ans += s[i];
    }
  }

  return ans;
}
