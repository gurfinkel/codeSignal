int kthDivisor(int n, int k) {
  std::vector<int> divisors;
  int i = 1;
  while (i * i < n) {
    if (n % i == 0) {
      divisors.push_back(i);
    }
    i++;
  }
  if (i * i > n) {
    i--;
  }
  while (i > 0) {
    if (n % i == 0) {
      divisors.push_back(n / i);
    }
    i--;
  }
  if (divisors.size() < k) {
    return -1;
  }
  return divisors[k - 1];
}
