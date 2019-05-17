std::string reflectString(std::string inputString) {

  std::string result = "";
  for (int i = 0; i < inputString.size(); i++) {
    int order = inputString[i] - 'a',
        reflectedCharCode = int('a') + 25 - order;
    result += char(reflectedCharCode);
  }

  return result;
}
