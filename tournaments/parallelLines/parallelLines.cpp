bool parallelLines(std::vector<int> line1, std::vector<int> line2) {

  if (line1[0] * line2[1] == line1[1] * line2[0]) {
    return true;
  }
  return false;
}
