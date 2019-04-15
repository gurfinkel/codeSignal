int countDigitsInNumber(int n) {
  int count = 0;
  while (n > 0) {
    count++;
    n /= 10;
  }
  return count;
}

int pagesNumberingWithInk(int current, int numberOfDigits) {
  int digitsInCurrent = countDigitsInNumber(current);
  while (numberOfDigits >= digitsInCurrent) {
    numberOfDigits -= digitsInCurrent;
    current++;
    digitsInCurrent = countDigitsInNumber(current);
  }
  return current - 1;
}
