std::string getMonthName(int mo) {
  mo--;
  std::string months[12] = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"};
  if (mo >= 0 && mo < 12) {
    return months[mo];
  } else {
    return "invalid month";
  }
}
