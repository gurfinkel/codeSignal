std::string htmlEndTagByStartTag(std::string startTag) {

  std::string result = "</";
  int position = 1;
  while (startTag[position] != ' ' && startTag[position] != '>') {
    result += startTag[position++];
  }
  result += '>';
  return result;
}
