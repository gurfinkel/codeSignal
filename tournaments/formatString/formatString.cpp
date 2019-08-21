std::string formatString(std::string inputString) {

  std::string formattedString = "";
  for (int i = 0; i < inputString.length(); i++) {
    if (inputString[i] == ' ') {
      if (formattedString.length() > 0
        && formattedString[formattedString.length() - 1] != ' ') {
          formattedString += inputString[i];
      }
    }
    else {
      formattedString += inputString[i];
    }
  }
  if (formattedString[formattedString.length() - 1] == ' ') {
    formattedString.erase(formattedString.end() - 1);
  }

  return formattedString;
}
