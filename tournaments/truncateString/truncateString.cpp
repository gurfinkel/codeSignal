std::string truncateString(std::string s) {

  struct Helper {
    std::string s;

    Helper(std::string s) : s(s) { }

    std::string truncate(int l, int r) {
      if (l >= r) {
        return "";
      }
      int newL = l;
      int newR = r;
      int left = s[l] - '0';
      int right = s[r - 1] - '0';
      if (left % 3 == 0) {
        newL++;
      } else if (right % 3 == 0) {
        newR--;
      } else if ((left + right) % 3 == 0) {
        newL++;
        newR--;
      } else {
        return s.substr(l, r - l);
      }

      return truncate(newL, newR);
    }
  };
  Helper h(s);

  return h.truncate(0, s.size());
}
