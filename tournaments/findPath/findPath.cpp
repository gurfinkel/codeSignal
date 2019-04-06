bool findPath(std::vector<std::vector<int>> matrix) {

  int positionX = -1;
  int positionY = -1;

  for (int i = 0; i < matrix.size(); i++) {
    for (int j = 0; j < matrix[0].size(); j++) {
      if (matrix[i][j] == 1) {
          positionX = i;
          positionY = j;
      }
    }
  }
  for (int i = 1; i < matrix.size() * matrix[0].size(); i++) {
    bool found = false;
    int nextX = -1;
    int nextY = -1;
    for (int dx = -1; dx <= 1; dx++) {
      for (int dy = -1; dy <= 1; dy++) {
        if (dx * dy == 0) {
          if (positionX + dx >= 0 && positionX + dx < matrix.size()
           && positionY + dy >= 0 && positionY + dy < matrix[0].size()) {
            if (matrix[positionX + dx][positionY + dy] == i + 1) {
              found = true;
              nextX = positionX + dx;
              nextY = positionY + dy;
            }
          }
        }
      }
    }
    if (found) {
      positionX = nextX;
      positionY = nextY;
    }
    else {
      return false;
    }
  }
  return true;
}
