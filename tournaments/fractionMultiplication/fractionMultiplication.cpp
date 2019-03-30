typedef std::vector<int> vi;
vi fractionMultiplication(vi a, vi b) {

  struct Helper {
    int gcdEuclid(int a, int b) {
      if (a == 0) {
        return b;
      }
      return gcdEuclid(b % a, a);
    }
  };
  Helper h;

  vi c(2);
  c[0] = a[0] * b[0], c[1] = a[1] * b[1];
  int gcd = h.gcdEuclid(c[0], c[1]);

  c[0] /= gcd;
  c[1] /= gcd;

  return c;
}
