std::vector<int> alternatingSums(std::vector<int> a) {
  int team1 = 0,
      team2 = 0;
  for (unsigned i = 0; i < a.size(); i += 2) {
    team1 += a[i];
  }
  for (unsigned i = 1; i < a.size(); i += 2) {
    team2 += a[i];
  }
  std::vector<int> result = {team1, team2};
  return result;
}
