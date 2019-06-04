std::vector<int> eratosthenesSieve(int n) {

  std::vector<int> primes;
  std::vector<bool> mayBePrime(n + 1, true);

  for (int i = 2; i <= n; i++) {
    if (mayBePrime[i]) {
      primes.push_back(i);
      for (int j = i; i * j <= n; j++) {
        mayBePrime[i * j] = false;
      }
    }
  }

  std::vector<int> result;
  for (int i = 0; i < primes.size(); i++) {
    result.push_back(primes[i]);
  }

  return result;
}
