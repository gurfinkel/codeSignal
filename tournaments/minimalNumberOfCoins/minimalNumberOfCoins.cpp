int minimalNumberOfCoins(std::vector<int> coins, int price) {

  int result = 0;

  for (int i = (int)coins.size() - 1; i >= 0; i--) {
    result += price / coins[i];
    price %= coins[i];
  }

  if (price) {
    return -1;
  }
  return result;
}
