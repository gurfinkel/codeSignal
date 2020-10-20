bool isPermutation(int n, std::vector<int> inputArray) {

  std::vector<int> countOccurences;

  for (int i = 0; i < n; i++) {
    countOccurences.push_back(0);
  }

  for (int i = 0; i < inputArray.size(); i++) {
    if (inputArray[i] - 1 < 0 || inputArray[i] - 1 >= n) {
      return false;
    }
    countOccurences[ inputArray[i] - 1 ]++;
  }

  for (int i = 0; i < n; i++) {
    if (countOccurences[i] != 1) {
      return false;
    }
  }
  return true;
}
