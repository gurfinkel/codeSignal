int chessKnightMoves(std::string cell) {

  struct Helper {
    bool isValid(int pos) {
      if (0 <= pos && pos < 8) {
        return true;
      }
      return false;
    }

    int getX(std::string pos) {
      return pos[0] - 'a';
    }

    int getY(std::string pos) {
      return pos[0] - '1';
    }
  };
  Helper h;

  int current_x = h.getX(cell.substr(0, 1));
  int current_y = h.getY(cell.substr(1, 2));
  int result = 0;

  for (int dx = -2; dx <= 2; dx++) {
    for (int dy = -2; dy <= 2; dy++) {
      if (std::abs(dx * dy) == 2) {
        if (h.isValid(current_x + dx) && h.isValid(current_y + dy)) {
          result++;
        }
      }
    }
  }
  return result;

}
