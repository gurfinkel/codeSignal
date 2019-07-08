int adjacentElementsProduct(std::vector<int> inputArray) {

  int best = inputArray[0] * inputArray[1],
      cur = best;
  for (int i = 1; i < (int)inputArray.size() - 1; i++) {
    cur = inputArray[i] * inputArray[i + 1];
    if (best < cur) {
      best = cur;
    }
  }

  return best;
}
