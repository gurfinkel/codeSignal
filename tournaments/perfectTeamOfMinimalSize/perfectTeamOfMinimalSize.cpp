int perfectTeamOfMinimalSize(int n, std::vector<std::vector<int>> candidates) {

  const int MAX_MASK = 1 << n;

  std::vector<int> knowledge(candidates.size(), 0);
  for (int i = 0; i < candidates.size(); i++) {
    for (int j = 0; j < candidates[i].size(); j++) {
      knowledge[i] |= 1 << candidates[i][j];
    }
  }
  std::vector<int> teamSize(MAX_MASK, -1);
  teamSize[0] = 1;
  for (int i = 0; i < teamSize.size(); i++) {
    if (teamSize[i] == -1) {
      continue;
    }
    for (int j = 0; j < knowledge.size(); j++) {
      int i2 = i | knowledge[j];
      if (teamSize[i2] == -1 || teamSize[i2] > teamSize[i] + 1) {
        teamSize[i2] = teamSize[i] + 1;
      }
    }
  }

  return teamSize[MAX_MASK - 1];
}
