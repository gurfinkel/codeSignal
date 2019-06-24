typedef std::vector<std::vector<int>> matrix;

matrix imageTruncation(matrix image, int threshold) {

  for (int i = 0; i < image.size(); i++) {
    for (int j = 0; j < image[0].size(); j++) {
      if (image[i][j] > threshold) {
        image[i][j] = threshold;
      }
    }
  }
  return image;
}
