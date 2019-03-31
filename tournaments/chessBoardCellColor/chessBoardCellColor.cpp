bool chessBoardCellColor(std::string cell1, std::string cell2) {

  struct Helper {
    int getX(std::string pos) {
      return pos[0] - 'A';
    }

    int getY(std::string pos) {
      return pos[1] - '1';
    }
  };
  Helper h;

  int sum1 = h.getX(cell1) + h.getY(cell1);
  int sum2 = h.getX(cell2) + h.getY(cell2);
  if (sum1 % 2 == sum2 % 2) {
    return true;
  }
  return false;

}
