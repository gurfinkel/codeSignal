bool eyeRhyme(std::string pairOfLines) {
  std::regex pattern(".*(...)\\t.*(...)");
  std::smatch match;
  std::regex_search(pairOfLines, match, pattern);
  return match.str(1) == match.str(2);
}
