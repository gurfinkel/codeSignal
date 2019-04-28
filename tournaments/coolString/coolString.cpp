bool coolString(std::string inputString) {

  struct Helper {
    bool isLowercase(char symbol) {
      if ('a' <= symbol && symbol <= 'z') {
        return true;
      }
      return false;
    }

    bool isUppercase(char symbol) {
      if ('A' <= symbol && symbol <= 'Z') {
        return true;
      }
      return false;
    }
  };
  Helper h;

  bool firstIsLowercase = h.isLowercase(inputString[0]);
  bool firstIsUppercase = h.isUppercase(inputString[0]);

  if (!(firstIsLowercase || firstIsUppercase)) {
    return false;
  }

  for (int i = 1; i < inputString.size(); i++) {
    if (i % 2) {
      if (h.isLowercase(inputString[i]) == firstIsLowercase ||
          h.isUppercase(inputString[i]) == firstIsUppercase) {
        return false;
      }
    }
    else {
      if (h.isLowercase(inputString[i]) != firstIsLowercase ||
          h.isUppercase(inputString[i]) != firstIsUppercase) {
        return false;
      }
    }
  }

  return true;
}
