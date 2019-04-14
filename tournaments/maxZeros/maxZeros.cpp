int maxZeros(int n) {
  int answer = 0,
      maxZeros = 0;
  for (int k = 2; k <= n; k++) {
    int numZeros = 0,
        value = n;
    while (value) {
      if (value % k == 0) {
        numZeros++;
      }
      value /= k;
    }
    if (numZeros > maxZeros) {
      maxZeros = numZeros;
      answer = k;
    }
  }
  return answer;
}
