int sequenceElement(std::vector<int> a, int n) {

  const int MOD = (int)1e5;
  std::vector<int> seq;
  for (int i = 0; i < 5; i++) {
    seq.push_back(a[i]);
  }

  int lastFive = a[0] * (int)1e4 + a[1] * (int)1e3 +
                 a[2] * (int)1e2 + a[3] * 10 + a[4];
  std::map<int, int> was;
  was[lastFive] = 4;

  for (int i = 5;; i++) {
    seq.push_back((seq[i - 1] + seq[i - 2] +
              seq[i - 3] + seq[i - 4] + seq[i - 5]) % 10);
    lastFive = (lastFive * 10 + seq[i]) % MOD;
    if (was.find(lastFive) != was.end()) {
      int last = was[lastFive];
      return seq[n % (i - last)];
    } else {
      was[lastFive] = i;
    }
  }
}
