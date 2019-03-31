std::string knapsackLight2(int weight1, int weight2, int maxW) {

  if (weight1 + weight2 <= maxW) {
    return "both";
  }
  if (std::min(weight1, weight2) > maxW) {
    return "none";
  }
  if (std::max(weight1, weight2) <= maxW) {
    return "either";
  }
  if (weight1 <= maxW) {
    return "first";
  }
  return "second";
}
