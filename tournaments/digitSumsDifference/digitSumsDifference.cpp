int digitSumsDifference(int n) {

  int result = 0;
  while (n) {
    int digit = n % 10;
    if (digit % 2 == 1) {
      result -= digit;
    }
    else {
      result += digit;
    }
    n /= 10;
  }

  return result;
}
