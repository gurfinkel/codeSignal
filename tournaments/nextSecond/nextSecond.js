function nextSecond(currentTime) {

    if (currentTime[2] === 59) {
        currentTime[2] = 0;
        if (currentTime[1] === 59) {
            currentTime[1] = 0;
            if (23 === currentTime[0]) {
                currentTime[0] = 0;
            } else {
                ++currentTime[0];
            }
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
    