int lastDigit(int a, int b) {

  int result = 1;
  for (int i = 0; i < b; i++) {
    result = (result * a) % 10;
  }
  return result;
}
