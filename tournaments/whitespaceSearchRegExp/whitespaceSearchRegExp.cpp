bool whitespaceSearchRegExp(std::string inputString) {
  return regex_search(inputString.begin(), inputString.end(), std::regex("\\s"));
}
