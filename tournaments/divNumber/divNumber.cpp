int divNumber(int k, int l, int r) {

  int ans = 0;
  for (int i = l; i <= r; i++) {
    int n = i;
    int divs = 1;
    for (int j = 2; j * j <= n; j++) {
      int pow = 0;
      while (n % j == 0) {
        n /= j;
        pow++;
      }
      divs *= 1 + pow;
      if (divs > k) {
        break;
      }
    }
    if (1 < n) {
        divs *= 2;
    }
    if (divs == k) {
      ans++;
    }
  }

  return ans;
}
