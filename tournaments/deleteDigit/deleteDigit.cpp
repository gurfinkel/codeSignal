int deleteDigit(int n) {
  int answer = 0;
  std::vector<int> digits;
  while (n != 0) {
    digits.push_back(n % 10);
    n /= 10;
  }
  int number;
  for (int deletedIndex = 0; deletedIndex < digits.size(); deletedIndex++) {
    number = 0;
    for (int i = (int)digits.size() - 1; i >= 0; i--) {
      if (i != deletedIndex) {
        number = number * 10 + digits[i];
      }
    }
    answer = std::max(number, answer);
  }
  return answer;
}
