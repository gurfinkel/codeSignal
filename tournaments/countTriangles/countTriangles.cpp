int countTriangles(std::vector<int> x, std::vector<int> y) {

  int result = 0;
  for (int i = 0; i < x.size(); i++) {
    for (int j = i + 1; j < x.size(); j++) {
      for (int k = j + 1; k < x.size(); k++) {
        int doubleArea = (x[i] - x[j]) * (y[i] - y[k])
                       - (x[i] - x[k]) * (y[i] - y[j]);
        if (doubleArea != 0) {
          result++;
        }
      }
    }
  }
  return result;
}
