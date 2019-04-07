std::string longestWord(std::string text) {

  std::string answer = "";
  std::string current = "";

  for (int i = 0; i < text.length(); ++i) {
    if ('a' <= text[i] && text[i] <= 'z'
        || 'A' <= text[i] && text[i] <= 'Z') {
      current += text[i];
      if (current.length() > answer.length()) {
        answer = current;
      }
    } else {
      current = "";
    }
  }

  return answer;
}
