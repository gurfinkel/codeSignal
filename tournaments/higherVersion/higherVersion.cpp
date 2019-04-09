bool higherVersion(std::string ver1, std::string ver2) {

  std::stringstream stream1(ver1),
                    stream2(ver2);
  std::string a, b;
  while (std::getline(stream1, a, '.')) {
    std::getline(stream2, b, '.');
    int cmp = std::stoi(a) - std::stoi(b);
    if (cmp > 0) {
      return true;
    } else if (cmp < 0) {
      return false;
    }
  }

  return false;
}
