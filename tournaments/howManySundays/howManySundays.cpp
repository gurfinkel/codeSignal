int howManySundays(int n, std::string startDay) {

  std::vector<std::string> week = {"Sunday", "Monday", "Tuesday", "Wednesday",
                                   "Thursday", "Friday", "Saturday"};

  int startIndex = 0;

  for (int i = 0; i < week.size(); i++) {
    if (week[i] == startDay) {
      startIndex = i;
      break;
    }
  }

  return (n + startIndex) / week.size();
}
