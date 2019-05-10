std::string lineEncoding(std::string s) {

  s += "#";
  int cnt = 1;
  std::string result = "";
  for (int i = 1; i < (int)s.size(); i++) {
    if (s[i] == s[i - 1]) {
      cnt++;
    } else {
      if (cnt > 1) {
        result += std::to_string(cnt);
      }
      cnt = 1;
      result += s[i - 1];
    }
  }

  return result;
}
