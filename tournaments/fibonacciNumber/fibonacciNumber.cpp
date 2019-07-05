int fibonacciNumber(int n) {

  std::vector<int> fibs(2);
  fibs[0] = 0;
  fibs[1] = 1;
  for (int i = 2; i <= n; i++) {
    fibs.push_back(fibs[i - 1] + fibs[i - 2]);
  }

  return fibs[n];
}
