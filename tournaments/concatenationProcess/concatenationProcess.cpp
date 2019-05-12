std::string concatenationProcess(std::vector<std::string> initialArray) {

  while (initialArray.size() > 1) {
    int minInd1 = 0,
        minInd2 = initialArray.size() - 1;

    for (int i = 1; i < initialArray.size(); i++) {
      if (initialArray[i].size() < initialArray[minInd1].size()) {
        minInd1 = i;
      }
    }

    if (minInd2 == minInd1) {
      minInd2--;
    }

    for (int i = initialArray.size() - 2; i >= 0; i--) {
      if (initialArray[i].size() < initialArray[minInd2].size()
       && i != minInd1) {
        minInd2 = i;
      }
    }

    initialArray.push_back(initialArray[minInd1] + initialArray[minInd2]);
    initialArray.erase(initialArray.begin() + std::max(minInd1, minInd2));
    initialArray.erase(initialArray.begin() + std::min(minInd1, minInd2));
  }

  return initialArray[0];
}
