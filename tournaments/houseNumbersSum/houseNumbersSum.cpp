int houseNumbersSum(std::vector<int> inputArray) {
  int numberSum = 0,
      i = 0,
      x;
  do {
    x = inputArray[i++];
    numberSum += x;
  } while (x != 0);
  return numberSum;
}
