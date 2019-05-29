int toDecimal(int k, std::string n) {

  int result = 0;
  int power = 1;
  for (int i = (int)n.size() - 1; i >= 0; i--) {
    result += int(n[i] - '0') * power;
    power *= k;
  }

  return result;
}
