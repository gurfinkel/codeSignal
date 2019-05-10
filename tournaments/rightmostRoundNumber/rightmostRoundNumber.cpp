int rightmostRoundNumber(std::vector<int> inputArray) {

  int ans = -1;
  for (int i = 0; i < inputArray.size(); i++) {
    if (inputArray[i] % 10 == 0) {
      ans = i;
    }
  }

  return ans;
}
