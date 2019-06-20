std::string properNounCorrection(std::string noun) {

  struct Helper {
    bool isLowerCase(char symbol) {
      if ('a' <= symbol && symbol <= 'z') {
        return true;
      }
      return false;
    }
  };
  Helper h;

  std::string result = "";

  if (h.isLowerCase(noun[0])) {
    result += noun[0] - 'a' + 'A';
  }
  else {
    result += noun[0];
  }

  for (int i = 1; i < noun.length(); i++) {
    if (!h.isLowerCase(noun[i])) {
      result += noun[i] - 'A' + 'a';
    }
    else {
      result += noun[i];
    }
  }

  return result;
}
