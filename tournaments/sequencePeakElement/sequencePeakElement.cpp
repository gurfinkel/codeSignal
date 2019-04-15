int sequencePeakElement(std::vector<int> sequence) {
  int left = 1;
  int right = (int)sequence.size() - 2;
  while (left < right) {
    int middle = (right + left) / 2;
    if (sequence[middle] > std::max(sequence[middle - 1], sequence[middle + 1])) {
      left = right = middle;
      break;
    }
    if (sequence[middle - 1] < sequence[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return sequence[left];
}
