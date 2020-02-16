int repetitionEncryption(std::string letter) {
  std::transform(letter.begin(), letter.end(), letter.begin(), ::tolower);
  std::regex pattern("([a-z]+)[^a-z]+\\1\\b");

  return std::distance(
    std::sregex_iterator(letter.begin(), letter.end(), pattern),
    std::sregex_iterator()
  );
}
