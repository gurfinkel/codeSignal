int champernowneDigit(int n) {

  for (int i = 1; ; i++) {
    int number = i;
    std::vector<int> digits;
    while (number != 0) {
      digits.push_back(number % 10);
      number = number / 10;
    }
    std::reverse(digits.begin(), digits.end());
    if (n <= digits.size()) {
      return digits[n - 1];
    }
    n -= digits.size();
  }
}
