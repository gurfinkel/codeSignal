bool isSentenceCorrect(std::string sentence) {
  std::regex regex("^[A-Z][^?.!]*[?.!]$");
  return std::regex_match(sentence, regex);
}
