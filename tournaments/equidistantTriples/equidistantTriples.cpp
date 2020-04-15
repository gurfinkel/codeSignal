int equidistantTriples(std::vector<int> coordinates) {

  int ans = 0;
  for (int i = 1; i < (int)coordinates.size() - 1; i++) {
    int left = i - 1;
    int right = i + 1;
    while (left >= 0 && right < (int)coordinates.size()) {
      int distL = coordinates[i] - coordinates[left];
      int distR = coordinates[right] - coordinates[i];
      if (distL == distR) {
        ans++;
        left--;
        right++;
      } else if (distL < distR) {
        left--;
      } else {
        right++;
      }
    }
  }

  return ans;
}
