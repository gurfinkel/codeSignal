int nextPrime(int n) {

  for (int i = n + 1; ; i++) {
    int isPrime = true;
    for (int divisor = 2; divisor * divisor <= i; divisor++) {
      if (i % divisor == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return i;
    }
  }
}
