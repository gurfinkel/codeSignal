bool isLucky(int n) {

  std::vector<int> digits;
  int sum = 0;

  while (n > 0) {
    digits.push_back(n % 10);
    n /= 10;
  }

  for (int i = 0; i < digits.size(); i++) {
    if (i < digits.size() / 2) {
      sum += digits[i];
    }
    else {
      sum -= digits[i];
    }
  }

  if (sum) {
    return false;
  }
  return true;
}
