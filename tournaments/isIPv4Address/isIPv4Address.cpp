bool isIPv4Address(std::string inputString) {

  int currentNumber = 0;
  bool emptyField = true;
  int countNumbers = 0;

  inputString += '.';

  for (int i = 0; i < inputString.size(); i++) {
    if (inputString[i] == '.') {
      if (emptyField) {
        return false;
      }
      countNumbers++;
      currentNumber = 0;
      emptyField = true;
    }
    else {
      int digit = inputString[i] - '0';
      if (digit < 0 || digit > 9) {
        return false;
      }
      emptyField = false;
      currentNumber = currentNumber * 10 + digit;
      if (currentNumber > 255) {
        return false;
      }
    }
  }
  return countNumbers == 4;
}
