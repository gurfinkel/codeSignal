bool checkFactorial(int n) {

  for (int divisor = 2; n != 1; divisor++) {
    if (n % divisor == 0) {
      n /= divisor;
    } else {
      return false;
    }
  }
  return true;
}
