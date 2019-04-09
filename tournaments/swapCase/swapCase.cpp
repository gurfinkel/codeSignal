std::string swapCase(std::string text) {

  std::string answer = "";

  for (int i = 0; i < text.length(); i++) {
    if (text[i] == std::toupper(text[i])) {
      answer += std::tolower(text[i]);
    }
    else {
      answer += std::toupper(text[i]);
    }
  }
  return answer;
}
