int chessKnight(std::string cell) {
  int row = cell[1] - '0',
      column = cell[0] - 'a'+1;
  int steps[8][2] = {
      {-2, -1}, {-1, -2}, {1, -2}, {2, -1},
      {2, 1}, {1, 2}, {-1, 2}, {-2, 1}
  };
  int answer = 0;

  for (int i = 0; i < 8; i++) {
    int tmpRow = row + steps[i][0];
    int tmpColumn = column + steps[i][1];
    if (tmpRow >= 1 && tmpRow <= 8 &&
        tmpColumn >= 1 && tmpColumn <= 8) {
      answer++;
    }
  }

  return answer;
}
