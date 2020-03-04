int additionWithoutCarrying(int param1, int param2) {
  int result = 0;
  int tenPower = 1;
  while (param1 > 0 || param2 > 0) {
    result += tenPower * ((param1 % 10 + param2 % 10) % 10);
    param1 /= 10;
    param2 /= 10;
    tenPower *= 10;
  }
  return result;
}
