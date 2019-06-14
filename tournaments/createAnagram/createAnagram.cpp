int createAnagram(std::string s, std::string t) {

  std::vector<int> cnt1(26, 0);
  std::vector<int> cnt2(26, 0);
  for (int i = 0; i < s.size(); i++) {
    cnt1[s[i] - 'A']++;
    cnt2[t[i] - 'A']++;
  }

  int ans = 0;
  for (int i = 0; i < 26; i++) {
    ans += std::abs(cnt1[i] - cnt2[i]);
  }

  return ans / 2;
}
