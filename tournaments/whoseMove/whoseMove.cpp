std::string whoseMove(std::string lastPlayer, bool win) {
  if (lastPlayer == "white") {
    if (win) {
      return "white";
    }
    else {
      return "black";
    }
  }
  else {
    if (win) {
      return "black";
    }
    else {
      return "white";
    }
  }
}
