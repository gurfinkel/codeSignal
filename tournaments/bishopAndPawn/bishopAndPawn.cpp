bool bishopAndPawn(std::string bishop, std::string pawn) {
  struct Parser {
    int getX(char pos) {
      return pos - 'a';
    }

    int getY(char pos) {
      return pos - '1';
    }
  };

  Parser myParser;
  int x1 = myParser.getX(bishop[0]);
  int y1 = myParser.getY(bishop[1]);
  int x2 = myParser.getX(pawn[0]);
  int y2 = myParser.getY(pawn[1]);

  if (x1 + y1 == x2 + y2 || x1 - y1 == x2 - y2) {
    return true;
  }

  return false;
}
