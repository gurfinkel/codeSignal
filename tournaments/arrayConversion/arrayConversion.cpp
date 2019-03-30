int arrayConversion(std::vector<int> inputArray) {

  int operation = 1;
  while (inputArray.size() > 1) {
    std::vector<int> newArray;
    for (int i = 0; i < inputArray.size(); i += 2) {
      if (operation % 2 == 1) {
        newArray.push_back(inputArray[i] + inputArray[i + 1]);
      }
      else {
        newArray.push_back(inputArray[i] * inputArray[i + 1]);
      }
    }
    inputArray = newArray;
    operation++;
  }

  return inputArray[0];
}
