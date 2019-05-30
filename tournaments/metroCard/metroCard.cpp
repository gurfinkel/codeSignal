std::vector<int> metroCard(int lastNumberOfDays) {
  if (lastNumberOfDays == 31) {
    return {28, 30, 31};
  } else {
    return {31};
  }
}
