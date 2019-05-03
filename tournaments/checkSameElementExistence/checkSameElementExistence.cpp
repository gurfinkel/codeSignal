bool checkSameElementExistence(std::vector<int> arr1, std::vector<int> arr2) {

  int i = 0;
  int j = 0;
  while (i < arr1.size() && j < arr2.size()) {
    if (arr1[i] == arr2[j]) {
      return true;
    }
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return false;
}
