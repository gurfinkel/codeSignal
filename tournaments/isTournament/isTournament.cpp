bool isTournament(int n, std::vector<int> fromV, std::vector<int> toV) {

  std::vector<bool> line(n, false);
  std::vector<std::vector<bool>> edges(n, line);

  for (int i = 0; i < fromV.size(); i++) {
    edges[ fromV[i] - 1 ][ toV[i] - 1 ] = true;
  }

  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      if (!(edges[i][j] ^ edges[j][i])) {
        return false;
      }
    }
  }

  if (fromV.size() != n * (n - 1) / 2) {
    return false;
  }
  return true;
}
