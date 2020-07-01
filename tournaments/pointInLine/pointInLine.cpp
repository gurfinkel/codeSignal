bool pointInLine(std::vector<int> point, std::vector<int> line) {

  if (0 == (line[0]*point[0]+line[1]*point[1]+line[2])) {
    return true;
  }
  return false;
}
