std::vector<int> powersOfTwo(int n) {

  std::vector<int> ans;
  int cur = 1;
  while (n > 0) {
    if (n % 2 == 1) {
      ans.push_back(cur);
    }
    n >>= 1;
    cur <<= 1;
  }

  return ans;
}
