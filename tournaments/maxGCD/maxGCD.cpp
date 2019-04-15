int maxGCD(std::vector<int> sequence) {
  struct Helper {
    int gcd(int a, int b) {
      if (b == 0) {
        return a;
      }
      return gcd(b, a % b);
    }
  };

  Helper h;
  int bestRes = 0;

  for (int i = 0; i < sequence.size(); i++) {
    int result = sequence[0];
    if (i == 0) {
      result = sequence[1];
    }
    for (int j = 0; j < sequence.size(); j++) {
      if (i == j) {
        continue;
      }
      result = h.gcd(result, sequence[j]);
    }
    if (result > bestRes) {
      bestRes = result;
    }
  }

  return bestRes;
}
