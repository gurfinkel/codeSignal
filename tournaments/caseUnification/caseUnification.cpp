std::string caseUnification(std::string inputString) {
  std::regex matcherForUppercase("[a-z]");
  std::regex matcherForLowercase("[A-Z]");
  std::smatch matchForUppercase;
  std::smatch matchForLowercase;
  int changesToMakeUppercase = 0;
  std::string tmp = inputString;
  while (std::regex_search(tmp, matchForUppercase, matcherForUppercase)) {
    changesToMakeUppercase++;
    tmp = matchForUppercase.suffix().str();
  }
  int changesToMakeLowercase = 0;
  tmp = inputString;
  while (std::regex_search(tmp, matchForLowercase, matcherForLowercase)) {
    changesToMakeLowercase++;
    tmp = matchForLowercase.suffix().str();
  }
  if (changesToMakeUppercase == 0
    || changesToMakeLowercase != 0
    && changesToMakeUppercase < changesToMakeLowercase) {
    std::transform(inputString.begin(), inputString.end(),
      inputString.begin(), ::toupper);
    return inputString;
  } else {
    std::transform(inputString.begin(), inputString.end(),
      inputString.begin(), ::tolower);
    return inputString;
  }
}
