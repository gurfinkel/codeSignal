bool reverseToSort(std::vector<int> inputArray) {

  for (int i = 0; i < inputArray.size(); i++) {
    for (int j = i + 1; j <= inputArray.size(); j++) {
      std::vector<int> mid, res;
      res.insert(res.end(), inputArray.begin(), inputArray.begin() + i);
      mid.insert(mid.end(), inputArray.begin() + i, inputArray.begin() + j);
      std::reverse(mid.begin(), mid.end());
      res.insert(res.end(), mid.begin(), mid.end());
      res.insert(res.end(), inputArray.begin() + j, inputArray.end());

      bool correct = true;

      for (int k = 1; k < res.size(); k++) {
        if (res[k - 1] >= res[k]) {
          correct = false;
          break;
        }
      }
      if (correct) {
        return true;
      }
    }
  }
  return false;
}
