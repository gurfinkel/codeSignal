int combs(std::string comb1, std::string comb2) {

  struct Helper {
    int getMask(std::string const & comb) {
      int mask = 0;
      for (int i = 0; i < comb.size(); i++) {
        char c = comb[i];
        mask = (mask << 1) + (c == '*');
      }
      return mask;
    }
  };
  Helper h;

  int m1 = h.getMask(comb1);
  int m2 = h.getMask(comb2);
  int len1 = comb1.size();
  int len2 = comb2.size();
  int answer = len1 + len2;
  for (int i = -len1; i <= len2; i++) {
    int tmp, length;
    if (i < 0) {
      tmp = m2 << (-i) & m1;
      length = std::max(-i + len2, len1);
    } else {
      tmp = m1 << i & m2;
      length = std::max(i + len1, len2);
    }
    if (tmp == 0 && answer > length) {
      answer = length;
    }
  }

  return answer;
}
