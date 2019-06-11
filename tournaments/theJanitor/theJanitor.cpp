std::vector<int> theJanitor(std::string word) {

  std::vector<int> left(26),
                   right(26);
  std::vector<bool> was(26, false);

  for (int i = 0; i < word.size(); i++) {
    int c = word[i] - 'a';
    if (!was[c]) {
      left[c] = i;
      was[c] = true;
    }
    right[c] = i;
  }

  std::vector<int> ans(26);
  for (int i = 0; i < 26; i++) {
    ans[i] = was[i] ? right[i] - left[i] + 1 : 0;
  }
  return ans;
}
