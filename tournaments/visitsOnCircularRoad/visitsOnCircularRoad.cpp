int visitsOnCircularRoad(int n, std::vector<int> visitsOrder) {

  int current = 1,
      res = 0;
  for (int i = 0; i < visitsOrder.size(); i++) {
    res += std::min(std::abs(visitsOrder[i] - current),
               n - std::abs(visitsOrder[i] - current));
    current = visitsOrder[i];
  }
  return res;
}
