bool isPowerOfTwo(int n) {

  while (n % 2 == 0) {
    n >>= 1;
  }

  if (n == 1) {
    return true;
  }

  return false;
}
