std::string longestDigitsPrefix(std::string inputString) {
  std::string result = "";
  for (int i = 0; i < inputString.size(); i++) {
    if ('0' <= inputString[i] && inputString[i] <= '9') {
      result += inputString[i];
    }
    else {
      break;
    }
  }
  return result;
}
