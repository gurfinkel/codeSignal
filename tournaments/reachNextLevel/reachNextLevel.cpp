bool reachNextLevel(int experience, int threshold, int reward) {
  experience += reward;
  if (experience >= threshold) {
    return true;
  }
  return false;
}
