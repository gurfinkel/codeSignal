int squareDigitsSequence(int a0) {

  int cur = a0;
  std::set<int> was;

  while (was.find(cur) == was.end()) {
    was.insert(cur);
    int next = 0;
    while (cur > 0) {
      next += (cur % 10) * (cur % 10);
      cur /= 10;
    }
    cur = next;
  }

  return was.size() + 1;
}
