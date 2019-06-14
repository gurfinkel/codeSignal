int halvingSum(int n) {
  int sum = 0;
  for (int i = n; i > 0; i /= 2) {
    sum += i;
  }
  return sum;
}
