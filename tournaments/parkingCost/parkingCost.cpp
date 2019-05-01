int parkingCost(std::string timeIn, std::string timeOut) {
  int diff = std::stoi(timeOut) * 60 +
            std::stoi(timeOut.substr(3)) -
            std::stoi(timeIn) * 60 -
            std::stoi(timeIn.substr(3));
  if (diff <= 30) {
    return 0;
  }
  if (diff <= 120) {
    return (diff - 21) / 10;
  }
  return 9 + ((diff - 111) / 10) * 2;
}
