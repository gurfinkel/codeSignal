int niceFractions2(int n) {
  int res = 0;
  for (int i = 0; i * n < int(1e5); i++) {
    bool digits[10] = {};
    int a = i * n;
    int b = i;
    bool isNice = true;
    for (int j = 0; j < 5; j++) {
      digits[a % 10] = true;
      a /= 10;
      digits[b % 10] = true;
      b /= 10;
    }
    for (int j = 0; j < 10; j++) {
      if (!digits[j]) {
        isNice = false;
        break;
      }
    }
    if (isNice) {
      res++;
    }
  }
  return res;
}
