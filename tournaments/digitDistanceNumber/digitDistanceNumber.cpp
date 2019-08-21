int digitDistanceNumber(int n) {
  int result = 0;
  int lastDigit = n % 10;
  int tenPower = 1;
  n /= 10;
  while (n) {
    result += tenPower * std::abs(n % 10 - lastDigit);
    tenPower *= 10;
    lastDigit = n % 10;
    n /= 10;
  }

  return result;
}
