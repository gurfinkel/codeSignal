int chessBoardSquaresUnderQueenAttack(int a, int b) {

  struct Helper {
    int a, b;
    int go(int x, int y, int dx, int dy) {
      if (x < 0 || x >= a || y < 0 || y >= b) {
        return 0;
      }
      return go(x + dx, y + dy, dx, dy) + 1;
    }
  };

  int res = 0;

  Helper h;
  h.a = a, h.b = b;

  for (int i = 0; i < a; i++) {
    for (int j = 0; j < b; j++) {
      for (int dx = -1; dx <= 1; dx++) {
        for (int dy = -1; dy <= 1; dy++) {
          if (dx != 0 || dy != 0) {
            res += h.go(i + dx, j + dy, dx, dy);
          }
        }
      }
    }
  }

  return res;
}
