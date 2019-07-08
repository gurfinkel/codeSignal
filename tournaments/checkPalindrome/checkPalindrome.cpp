bool checkPalindrome(std::string inputString) {

  bool isPalindrome = true;
  for (int i = 0; i < inputString.size(); i++) {
    if (inputString[i] != inputString[(int)inputString.size() - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}
