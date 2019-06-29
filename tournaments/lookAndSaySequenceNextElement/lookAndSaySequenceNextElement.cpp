std::string lookAndSaySequenceNextElement(std::string inputString) {

  int consecutiveEqual = 1;
  std::string result = "";
  inputString += '#';
  for (int i = 1; i < inputString.size(); i++) {
    if (inputString[i] != inputString[i - 1]) {
      result += std::to_string(consecutiveEqual);
      result += inputString[i - 1];
      consecutiveEqual = 1;
    }
    else {
      consecutiveEqual++;
    }
  }

  return result;
}
