int trailingZeros(int n) {
  int answer = 0;
  while (n % 2 == 0) {
    n /= 2;
    answer++;
  }
  return answer;
}
