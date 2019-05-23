int countWaysToChangeDigit(int value) {
  int answer = 0;
  while (value) {
    answer += 9 - value % 10;
    value /= 10;
  }
  return answer;
}
