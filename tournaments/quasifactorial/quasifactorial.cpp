int quasifactorial(int n) {
  int answer = 1;
  for (int i = 2; i <= n; ++i) {
    answer *= i;
    --answer;
  }
  return answer;
}
