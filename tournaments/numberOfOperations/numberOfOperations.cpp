int numberOfOperations(int a, int b) {

  if (a < b) {
    std::swap(a, b);
  }
  if (a % b != 0) {
    return 0;
  }
  return numberOfOperations(a / b, b) + 1;
}
