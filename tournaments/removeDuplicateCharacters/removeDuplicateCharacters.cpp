std::string removeDuplicateCharacters(std::string str) {
  std::map<char, int> charCount;
  std::string newStr = "";
  for (int i = 0; i < str.size(); i++) {
    char symbol = str[i];
    if (charCount.count(symbol)) {
      charCount[symbol]++;
    } else {
      charCount[symbol] = 1;
    }
  }
  for (int i = 0; i < str.size(); i++) {
    if (charCount[str[i]] == 1) {
      newStr += str[i];
    }
  }
  return newStr;
}
