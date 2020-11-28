std::vector<int> textOverlayOnHeroImage(std::vector<std::vector<int>> image,
                                        int height, int width) {
  struct Helper {
    std::vector<std::vector<int>> image;

    Helper(std::vector<std::vector<int>> image)
        : image(image) {}

    int columnSum(int x, int y1, int y2) {
      int result = 0;
      for (int y = y1; y < y2; y++) {
        result += image[y][x];
      }
      return result;
    };

    int rowSum(int y, int x1, int x2) {
      int result = 0;
      for (int x = x1; x < x2; x++) {
        result += image[y][x];
      }
      return result;
    }
  };

  int bestSum = -1;
  int sum = 0;
  int lastRowLeftmostSum = 0;
  std::vector<int> bestPos;

  Helper h = Helper(image);

  for (int i = 0; i + height <= image.size(); i++) {
    for (int j = 0; j + width <= image[0].size(); j++) {
      if (!i && !j) {
        for (int y = 0; y < height; y++) {
          sum += h.rowSum(y, 0, width);
        }
        lastRowLeftmostSum = sum;
      }
      else if (!j) {
        sum = lastRowLeftmostSum - h.rowSum(i-1, 0, width) + h.rowSum(i+height-1, 0, width);
      }
      else {
        sum = sum - h.columnSum(j - 1, i, i + height)
                  + h.columnSum(j + width - 1, i, i + height);
      }
      if (sum > bestSum) {
        bestSum = sum;
        bestPos = {i, j};
      }
    }
  }

  return bestPos;
}
