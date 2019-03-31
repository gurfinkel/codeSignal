bool isTandemRepeat(std::string inputString) {

  int len = inputString.size();
  if (len % 2 == 1) {
    return false;
  }
  for (int i = 0; i < len / 2; i++) {
    if (inputString[i] != inputString[i + len / 2]) {
      return false;
    }
  }

  return true;
}
