int countWaysToReachFinish(std::vector<bool> cells) {
  typedef std::vector<int> vi;
  typedef std::vector<bool> vb;

  struct Helper {
    vb cells;
    int n;
    int MAX_MASK;
    // dp[m][k] - the number of ways to reach the k-th cell using jumps
    // that are marked in the mask m.
    std::vector<vi> dp;
    std::vector<vb> was;

    Helper(vb cells) : cells(cells) {
      n = cells.size();
      MAX_MASK = 1 << n;
      dp = std::vector<vi>(MAX_MASK, vi(n, 0));
      was = std::vector<vb>(MAX_MASK, vb(n, false));
      dp[0][0] = 1;
      was[0][0] = true;
    }

    int get(int m, int k) {
      if (k < 0 || k >= n || !cells[k]) {
        return 0;
      }
      if (was[m][k]) {
        return dp[m][k];
      }
      for (int i = 1; i < n; i++) {
        if (m >> i & 1) {
          dp[m][k] += get(m ^ (1 << i), k - i);
          dp[m][k] += get(m ^ (1 << i), k + i);
        }
      }
      was[m][k] = true;
      return dp[m][k];
    }
  };
  Helper h(cells);
  int ans = 0;
  for (int m = 0; m < h.MAX_MASK; m++) {
    ans += h.get(m, h.n - 1);
  }

  return ans;
}
