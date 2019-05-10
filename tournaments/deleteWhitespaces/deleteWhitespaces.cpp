std::string deleteWhitespaces(std::string inputStr) {
  std::string buf;
  std::stringstream ss(inputStr);
  std::vector<std::string> nonWhitespaces;
  while (ss >> buf) {
    nonWhitespaces.push_back(buf);
  }
  std::string answer = "";
  for (int i = 0; i < nonWhitespaces.size(); i++) {
    answer += nonWhitespaces[i];
  }
  return answer;
}
