int differentSubstrings(std::string inputString) {

  std::vector<std::string> substrings;
  int result = 1;

  for (int i = 0; i < inputString.size(); i++) {
    for (int j = i + 1; j <= inputString.size(); j++) {
      substrings.push_back(inputString.substr(i, j - i));
    }
  }
  std::sort(substrings.begin(), substrings.end());
  for (int i = 1; i < substrings.size(); i++) {
    if (substrings[i] != substrings[i - 1]) {
      result++;
    }
  }

  return result;
}
