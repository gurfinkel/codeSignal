typedef std::vector<std::vector<char>> Canvas;

Canvas drawRectangle(Canvas canvas, std::vector<int> rectangle) {
  for (int i = rectangle[0] + 1; i < rectangle[2]; i++) {
    canvas[rectangle[1]][i] = '-';
    canvas[rectangle[3]][i] = '-';
  }
  for (int i = rectangle[1] + 1; i < rectangle[3]; i++) {
    canvas[i][rectangle[0]] = '|';
    canvas[i][rectangle[2]] = '|';
  }
  for (int i = 0; i < 4; i += 2) {
    for (int j = 1; j < 4; j += 2) {
      canvas[rectangle[j]][rectangle[i]] = '*';
    }
  }
  return canvas;
}
