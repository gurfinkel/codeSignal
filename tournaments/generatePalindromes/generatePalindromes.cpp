std::vector<std::string> generatePalindromes(std::string charactersSet) {

  struct Helper {
    int N;
    std::vector<char> palindrome;
    std::vector<int> letterCnt;
    std::vector<std::string> result;

    Helper(std::string charactersSet) {
      N = charactersSet.size();
      palindrome = std::vector<char>(N, 0);
      letterCnt = std::vector<int>(26, 0);
      for (int i = 0; i < N; i++) {
        letterCnt[charactersSet[i] - 'a']++;
      }
      if (N % 2 == 1) {
        for (int i = 0; i < 26; i++) {
          if (letterCnt[i] % 2 == 1) {
            letterCnt[i]--;
            palindrome[N / 2] = (char)('a' + i);
            break;
          }
        }
      }
    }

    void generate(int idx) {
      if (idx >= N / 2) {
        result.push_back(std::string(palindrome.begin(), palindrome.end()));
        return;
      }
      for (int i = 0; i < 26; i++) {
        if (letterCnt[i] >= 2) {
          letterCnt[i] -= 2;
          palindrome[idx] = (char)('a' + i);
          palindrome[N - idx - 1] = (char)('a' + i);
          generate(idx + 1);
          letterCnt[i] += 2;
        }
      }
    }
  };
  Helper h(charactersSet);

  h.generate(0);
  return h.result;
}
