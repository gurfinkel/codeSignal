int binarySearch(std::vector<int> inputArray, int searchElement) {

  int minIndex = -1;
  int maxIndex = static_cast<int>(inputArray.size());
  int currentIndex;
  int currentElement;

  while (minIndex < maxIndex - 1) {
    currentIndex = (minIndex + maxIndex) / 2;
    currentElement = inputArray[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex;
    } else {
      maxIndex = currentIndex;
    }
  }

  if (maxIndex == static_cast<int>(inputArray.size())
      || inputArray[maxIndex] != searchElement) {
    return -1;
  }
  return maxIndex;
}
