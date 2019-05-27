std::string alphabeticShift(std::string inputString) {
  for (int i = 0; i < inputString.size(); ++i) {
    int number = inputString[i] - 'a';
    number = (number + 1) % 26;
    inputString[i] = 'a' + number;
  }
  return inputString;
}
