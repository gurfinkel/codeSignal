bool isSubsequence(std::string t, std::string s) {
  std::string pattern = "";
  for (char ch : s) {
    pattern += "[" + std::string(1,ch) + "].*";
  }
  std::regex regex(pattern);
  return std::regex_search(t, regex);
}
