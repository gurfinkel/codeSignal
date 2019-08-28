std::string integerToStringOfFixedWidth(int number, int width) {

  std::string result = "";

  for (int i = 0; i < width; i++) {
    result += '0';
  }

  int position = width - 1;
  while (number && position >= 0) {
    result[position] = '0' + number % 10;
    number /= 10;
    position--;
  }

  return result;
}
