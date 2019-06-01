std::vector<std::vector<int>> create2DArray(std::vector<int> lengths) {

  std::vector<std::vector<int>> result;

  for (int i = 0; i < lengths.size(); i++) {
    std::vector<int> line;
    for (int j = 0; j < lengths[i]; j++) {
      line.push_back(j);
    }
    result.push_back(line);
  }

  return result;
}
