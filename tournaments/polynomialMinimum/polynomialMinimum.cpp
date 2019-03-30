int polynomialMinimum(std::vector<int> coeffs, std::vector<int> interval) {
  struct Helper {
    std::vector<int> coeffs;

    Helper(std::vector<int> coeffs) : coeffs(coeffs) {};

    int f(int x) {
      int res = 0;
      for (int c : coeffs) {
        res = res * x + c;
      }
      return res;
    }
  };

  Helper h(coeffs);

  int l = interval[0];
  int r = interval[1];

  while (r - l >= 3) {
    int m1 = l + (r - l) / 3;
    int m2 = r - (r - l) / 3;
    if (h.f(m1) > h.f(m2)) {
      l = m1;
    }
    else {
      r = m2;
    }
  }

  int res = h.f(l);
  while (l <= r) {
    if (h.f(l) < res) {
      res = h.f(l);
    }
    l++;
  }

  return res;
}
