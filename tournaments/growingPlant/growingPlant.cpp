int growingPlant(int upSpeed, int downSpeed, int desiredHeight) {

  int currentHeight = 0,
      dayIndex = 1;

  while (currentHeight + upSpeed < desiredHeight) {
    currentHeight += upSpeed - downSpeed;
    dayIndex++;
  }

  return dayIndex;
}
