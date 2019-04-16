int kthDigit(int n, int k) {

  int numDigits = 0, number = n;
  while (number) {
    numDigits++;
    number /= 10;
  }

  int indexFromLast = numDigits - k + 1;

  while (n) {
    if (--indexFromLast == 0) {
      return n % 10;
    }
    n /= 10;
  }

  return -1;
}
