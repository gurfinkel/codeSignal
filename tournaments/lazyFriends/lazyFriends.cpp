std::vector<int> lazyFriends(std::vector<int> houses, int maxDist) {

  std::vector<int> result(houses.size());
  int left = 0,
      right = 0;
  for (int i = 0; i < houses.size(); i++) {
    while (houses[i] - houses[left] > maxDist) {
      left++;
    }
    while (right + 1 < houses.size()
        && houses[right + 1] - houses[i] <= maxDist) {
      right++;
    }
    result[i] = right - left;
  }

  return result;
}
