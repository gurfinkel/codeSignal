std::string runLengthEncoding(std::string inputString) {

  int repeatLength = 1;
  std::string answer = "";
  for (int i = 1; i < inputString.length(); i++) {
    if (inputString[i] != inputString[i - 1]) {
      answer += std::to_string(repeatLength);
      answer += inputString[i - 1];
      repeatLength = 1;
    }
    else {
      repeatLength++;
    }
  }
  answer += std::to_string(repeatLength);
  answer += inputString[inputString.length() - 1];
  return answer;
}
