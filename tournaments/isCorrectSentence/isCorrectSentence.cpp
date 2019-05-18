bool isCorrectSentence(std::string inputString) {

  char leadChar = inputString[0],
       endChar = inputString[inputString.size() - 1];

  if ('A' <= leadChar && leadChar <= 'Z'
      && endChar == '.') {
    return true;
  }
  else {
    return false;
  }
}
