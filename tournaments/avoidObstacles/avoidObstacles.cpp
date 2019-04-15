int avoidObstacles(std::vector<int> inputArray) {

  for (int i = 1; ; i++) {
    for (int j = 0; j < inputArray.size(); j++) {
      if (inputArray[j] % i == 0) {
        break;
      }
      if (j == inputArray.size() - 1) {
        return i;
      }
    }
  }
}
