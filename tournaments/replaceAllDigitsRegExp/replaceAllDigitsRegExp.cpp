std::string replaceAllDigitsRegExp(std::string input) {
  return std::regex_replace(input, std::regex("[0-9]"), "#");
}
