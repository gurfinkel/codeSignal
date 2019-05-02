std::string addDigits(int a, int b, int n) {

  int rem = a % b;

  std::string result = std::to_string(a);

  for (int i = 0; i < n; i++) {
    int best = -1;
    for (int digit = 9; digit >= 0; digit--) {
      if ((rem * 10 + digit) % b == 0) {
        best = digit;
        break;
      }
    }
    if (best == -1) {
      break;
    }
    result += '0' + best;
    rem = (rem * 10 + best) % b;
  }

  return result;
}
