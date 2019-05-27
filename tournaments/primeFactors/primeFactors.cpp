std::vector<int> primeFactors(int n) {
  std::vector<int> factors;
  int divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push_back(divisor);
      n /= divisor;
    }
    else {
      divisor++;
    }
  }
  return factors;
}
