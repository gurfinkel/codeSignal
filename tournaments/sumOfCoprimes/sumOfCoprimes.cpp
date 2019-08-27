int sumOfCoprimes(int m) {

  int ans = 0;
  for (int p = 2; p <= m; p++) {
    int a = p;
    int b = m;
    while (a > 0) {
      int tmp = b % a;
      b = a;
      a = tmp;
    }

    if (b == 1) {
      ans += p;
    }
  }

  return ans;
}
