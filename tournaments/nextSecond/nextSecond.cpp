std::vector<int> nextSecond(std::vector<int> currentTime) {

  if (currentTime[2] == 59) {
    currentTime[2] = 0;
    if (currentTime[1] == 59) {
      currentTime[1] = 0;
      currentTime[0] = (currentTime[0] + 1) % 24;
    }
    else {
      currentTime[1]++;
    }
  }
  else {
    currentTime[2]++;
  }

  return currentTime;
}
