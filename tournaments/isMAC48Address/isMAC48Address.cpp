bool isMAC48Address(std::string inputString) {

  for (int i = 0; i < inputString.size(); i++) {
    if (i % 3 == 2) {
      if (inputString[i] != '-') {
        return false;
      }
    }
    else {
      char sym = inputString[i];
      if (!('0' <= sym && sym <= '9' || 'A' <= sym && sym <= 'F')) {
        return false;
      }
    }
  }

  return inputString.size() == 17;
}
