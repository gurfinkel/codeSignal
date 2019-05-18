std::string biggerWord(std::string w) {

  int leftSwap = -1;
  for (int i = (int)w.size() - 2; i >= 0; i--) {
    if (w[i] < w[i + 1]) {
      leftSwap = i;
      break;
    }
  }
  if (leftSwap == -1) {
    return "no answer";
  }

  int rightSwap = (int)w.size() - 1;
  while (w[leftSwap] >= w[rightSwap]) {
    rightSwap--;
  }
  std::swap(w[leftSwap++], w[rightSwap]);
  rightSwap = (int)w.size() - 1;
  while (leftSwap < rightSwap) {
    std::swap(w[leftSwap++], w[rightSwap--]);
  }
  return w;
}
