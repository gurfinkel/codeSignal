int specialNumbers(int l, int r) {

  int ans = 0;
  for (int i = l; i <= r; i++) {
    std::string digits = std::to_string(i);
    bool ok = true;
    for (int j = 0; j < (digits.size() + 1) / 2; j++) {
      if (digits[j] == '6' || digits[j] == '9') {
        ok &= digits[(int)digits.size() - 1 - j] == '9' - digits[j] + '6';
      } else if (digits[j] == '0' || digits[j] == '8') {
        ok &= digits[j] == digits[(int)digits.size() - 1 - j];
      } else {
        ok = false;
      }
    }
    if (ok) {
      ans++;
    }
  }

  return ans;
}
