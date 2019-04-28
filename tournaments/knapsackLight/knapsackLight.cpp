int knapsackLight(int value1, int weight1,
                  int value2, int weight2, int maxW) {

  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }
  if (std::min(weight1, weight2) > maxW) {
    return 0;
  }
  if (weight1 <= maxW && (value1 >= value2 || weight2 > maxW)) {
    return value1;
  }
  return value2;
}
