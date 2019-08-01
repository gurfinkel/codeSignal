std::string digitCharactersSum(char ch1, char ch2) {
  int x1 = int(ch1) - int('0');
  int x2 = int(ch2) - int('0');
  if (x1 + x2 < 10) {
    char digit = char(int('0') + x1 + x2);
    return std::string(1, digit);
  }
  else {
    char digit = char(int('0') + (x1 + x2) % 10);
    return "1" + std::string(1, digit);
  }
}
