int digitDegree(int n){

  struct Helper {
    int digitSum(int n) {
      int sum = 0;
      while (n != 0) {
        sum += n % 10;
        n /= 10;
      }
      return sum;
    }
  };
  Helper h;

  int result = 0;

  while (n > 9) {
    result++;
    n = h.digitSum(n);
  }

  return result;
}
