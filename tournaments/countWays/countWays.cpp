int countWays(int n, int k) {
  const int MOD = int(1e9) + 7;

  std::vector<std::vector<int>> c_nk;
  for (int i = 0; i <= n; i++) {
    std::vector<int> line;
    c_nk.push_back(line);
    for (int j = 0; j <= k; j++) {
      c_nk[i].push_back(0);
    }
  }
  c_nk[0][0] = 1;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j <= k; j++) {
      if (i + 1 <= n) {
        c_nk[i + 1][j] = (c_nk[i + 1][j] + c_nk[i][j]) % MOD;
        if (j + 1 <= k) {
          c_nk[i + 1][j + 1] = (c_nk[i + 1][j + 1] + c_nk[i][j]) % MOD;
        }
      }
    }
  }

  return c_nk[n][k];
}
