int amicableNumbers(int n) {

  std::map<int, int> divSum;
  divSum[1] = 0;
  for (int i = 2;; i++) {
    int sum = 0;
    for (int j = 1; j < i; j++) {
      if (i % j == 0) {
        sum += j;
      }
    }
    divSum[i] = sum;
    if (sum < i && divSum[sum] == i) {
      if (sum >= n) {
        return sum;
      } else if (i >= n) {
        return i;
      }
    }
  }
}
