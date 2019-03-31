bool validTime(std::string Time) {

  struct Helper {
    int charToInt(char symbol) {
      return int(symbol) - int('0');
    }
  };

  Helper h;

  int hours = h.charToInt(Time[0]) * 10 + h.charToInt(Time[1]),
      minutes = h.charToInt(Time[3]) * 10 + h.charToInt(Time[4]);

  if (hours < 24 && minutes < 60) {
    return true;
  }
  return false;
}
