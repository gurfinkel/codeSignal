int fibonacciIndex(int n) {

  int a = 0;
  int b = 1;
  int i = 0;
  while (std::to_string(a).size() < n) {
    int c = a + b;
    a = b;
    b = c;
    i++;
  }
  return i;
}
