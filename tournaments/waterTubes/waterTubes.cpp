int waterTubes(std::vector<int> water, std::vector<int> flowPerMinute) {
  int result = 0;

  for (int i = 0; i < water.size(); i++) {
    int minutes = water[i] / flowPerMinute[i];
    if (water[i] % flowPerMinute[i] != 0) {
      minutes++;
    }
    if (result < minutes) {
      result = minutes;
    }
  }
  return result;
}
