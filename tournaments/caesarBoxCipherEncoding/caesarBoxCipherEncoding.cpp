std::string caesarBoxCipherEncoding(std::string inputString) {

  int n = std::sqrt(inputString.size());
  std::string ans = "";
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      ans += inputString[j * n + i];
    }
  }

  return ans;
}
