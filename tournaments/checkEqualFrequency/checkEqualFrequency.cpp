bool checkEqualFrequency(std::vector<int> inputArray) {

  int numberOfEqual = 1;

  std::sort(inputArray.begin(), inputArray.end());

  while (numberOfEqual < inputArray.size()
      && inputArray[numberOfEqual - 1] == inputArray[numberOfEqual]) {
    numberOfEqual++;
  }

  if (inputArray.size() % numberOfEqual != 0) {
    return false;
  }

  for (int i = 0; i < inputArray.size(); i += numberOfEqual) {
    if (i && inputArray[i] == inputArray[i - 1]) {
      return false;
    }
    for (int j = i + 1; j < numberOfEqual + i; j++) {
      if (inputArray[j] != inputArray[j - 1]) {
        return false;
      }
    }
  }

  return true;
}
