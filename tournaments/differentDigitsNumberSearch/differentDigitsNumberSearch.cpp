int differentDigitsNumberSearch(std::vector<int> inputArray) {

  for (int i = 0; i < inputArray.size(); i++) {
    int cur = inputArray[i];
    std::vector<bool> was(10, false);
    bool ok = true;
    while (cur > 0) {
      if (was[cur % 10]) {
        ok = false;
        break;
      }
      was[cur % 10] = true;
      cur /= 10;
    }
    if (ok) {
      return inputArray[i];
    }
  }

  return -1;
}
