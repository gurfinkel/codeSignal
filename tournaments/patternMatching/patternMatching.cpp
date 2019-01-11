typedef std::vector<std::vector<bool>> matrix;

bool patternMatching(std::string input, std::string pattern) {

  std::vector<bool> line(pattern.size() + 1, false);
  matrix dp(input.size() + 1, line);

  dp[0][0] = true;
  for (int i = 0; i <= input.size(); i++) {
    for (int j = 0; j < pattern.size(); j++) {
      if (!dp[i][j]) {
        continue;
      }
      if (i < input.size()
       && (input[i] == pattern[j] || pattern[j] == '?') ) {
        dp[i + 1][j + 1] = true;
      }
      if (pattern[j] == '*') {
        for (int k = 0; i + k <= input.size(); k++) {
          dp[i + k][j + 1] = true;
        }
      }
    }
  }

  return dp[input.size()][pattern.size()];
}
