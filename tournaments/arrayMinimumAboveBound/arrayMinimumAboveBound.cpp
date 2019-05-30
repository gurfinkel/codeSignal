int arrayMinimumAboveBound(std::vector<int> inputArray, int bound) {

  int best = -1;
  for (int i = 0; i < inputArray.size(); i++) {
    if (inputArray[i] > bound &&
        (best == -1 || inputArray[i] < best)) {
      best = inputArray[i];
    }
  }

  return best;
}
