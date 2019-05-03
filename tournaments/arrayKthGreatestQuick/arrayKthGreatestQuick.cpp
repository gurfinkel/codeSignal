int arrayKthGreatestQuick(std::vector<int> inputArray, int k) {

  int pos = int(double(rand()) / RAND_MAX * inputArray.size());
  std::vector<int> left, right;

  if (inputArray.size() == 1) {
    return inputArray[0];
  }

  for (int i = 0; i < inputArray.size(); i++) {
    if (inputArray[i] <= inputArray[pos]) {
      left.push_back(inputArray[i]);
    }
    else {
      right.push_back(inputArray[i]);
    }
  }

  if (right.size() >= k) {
    return arrayKthGreatestQuick(right, k);
  }
  return arrayKthGreatestQuick(left, k - right.size());
}
